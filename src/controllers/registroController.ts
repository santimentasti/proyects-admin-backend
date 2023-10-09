import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../routes/auth/password-utils';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = 'clave_secreta'; // Reemplaza con tu clave secreta real

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
    const newUser = await prisma.usuario.create({
      data: {
        username,
        nombre,
        apellido,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Registro exitoso', token });
  } catch (error) {
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
}

export { registrarUsuario };
