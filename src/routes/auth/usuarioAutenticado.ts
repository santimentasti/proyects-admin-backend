import express from 'express';
import { verificarAutenticacion } from '../../middleware/authMiddleware';

const router = express.Router();

// Ruta para verificar la autenticación
router.get('/', verificarAutenticacion, (req, res) => {
  // Si se llega a esta ruta, significa que el usuario está autenticado
  res.json({ autenticado: true, usuario: req.session.id });
});

export default router;