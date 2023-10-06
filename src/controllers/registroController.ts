import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../routes/auth/password-utils';

const prisma = new PrismaClient();

async function registrarUsuario(req: Request, res: Response, next: NextFunction) {
  const { username, password, nombre, apellido } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.usuario.findFirst({
      where: { username: username },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    // Crear el nuevo usuario
    const hashedPassword = await hashPassword(password);
    await prisma.usuario.create({
      data: {
        username,
        nombre,
        apellido,
        password: hashedPassword,
      },
    });

    res.json({ message: 'Registro exitoso' });
  } catch (error) {
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
}

export { registrarUsuario };