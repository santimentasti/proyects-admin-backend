import { Request, Response, NextFunction } from 'express';

async function cerrarSesion(req: Request, res: Response, next: NextFunction) {
  req.session.destroy(() => {
    res.json({ message: 'Cierre de sesión exitoso' });
  });
}

export { cerrarSesion };