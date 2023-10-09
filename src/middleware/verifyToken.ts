import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'clave_secreta'; // Reemplaza con tu clave secreta real

const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err:any, decoded:any) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.userId = decoded.userId; // Agrega el ID de usuario a la solicitud para su posterior uso
    next();
  });
};

export default verifyToken;