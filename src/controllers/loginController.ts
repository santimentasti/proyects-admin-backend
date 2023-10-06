import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '../routes/auth/password-utils';


const prisma = new PrismaClient();

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

    // Iniciar sesión almacena el usuario en la sesión (req.session)
    req.session.id = user.username;

    res.json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
}

export { iniciarSesion };