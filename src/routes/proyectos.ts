import express from 'express';
import proyectosController from '../controllers/proyectosController';

const router = express.Router();

router.get('/', proyectosController.obtenerProyectos);
router.get('/:id', proyectosController.obtenerProyectoPorId);
router.post('/', proyectosController.crearProyecto);
router.put('/:id', proyectosController.actualizarProyecto);
router.delete('/:id', proyectosController.eliminarProyecto);

export default router;