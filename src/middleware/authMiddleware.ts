import { Request, Response, NextFunction } from 'express';

// Middleware para verificar la autenticación
export function verificarAutenticacion(req: Request, res: Response, next: NextFunction) {
  if (!req.session.id) {
    return res.status(401).json({ mensaje: 'No estás autenticado' });
  }
  next();
}