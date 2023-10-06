import express from 'express';
import tareasController from '../controllers/tareasController';

const router = express.Router();

// Rutas para operaciones CRUD de tareas
router.get('/', tareasController.obtenerTareas);
router.post('/', tareasController.crearTarea);
router.put('/:id', tareasController.actualizarTarea);
router.delete('/:id', tareasController.eliminarTarea);

export default router;