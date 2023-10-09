import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '../routes/auth/password-utils';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = 'clave_secreta'; // Reemplaza con tu clave secreta real

async function iniciarSesion(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  try {
    // Buscar al usuario por nombre de usuario
    const user = await prisma.usuario.findFirst({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar un token JWT y enviarlo como respuesta
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token, userId: user.id });
  } catch (error) {
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
}

export { iniciarSesion };
