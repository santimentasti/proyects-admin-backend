import express from 'express';
import tareasController from '../controllers/tareasController';

const router = express.Router();

router.get('/', tareasController.obtenerTareas);
router.get('/:proyectoId', tareasController.obtenerTareasPorProyectoId);
router.post('/', tareasController.crearTarea);
router.put('/:id', tareasController.actualizarTarea);
router.put('/completar/:id', tareasController.marcarTareaComoCompleta);
router.delete('/:id', tareasController.eliminarTarea);

export default router;