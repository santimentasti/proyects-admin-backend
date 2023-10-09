import express from 'express';
import usuariosController from '../controllers/usuariosController';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', usuariosController.obtenerUsuarios);

export default router;