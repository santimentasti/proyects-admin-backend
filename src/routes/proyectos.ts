import express from 'express';
import proyectosController from '../controllers/proyectosController';
import colaboradoresController from '../controllers/colaboradoresController';

const router = express.Router();

router.get('/', proyectosController.obtenerProyectos);
router.get('/:id', proyectosController.obtenerProyectoPorId);
router.post('/', proyectosController.crearProyecto);
router.post('/:id/colaboradores', proyectosController.agregarColaborador);
router.put('/:id', proyectosController.actualizarProyecto);
router.delete('/:id', proyectosController.eliminarProyecto);

router.get("/:proyectId/colaboradores", colaboradoresController.obtenerColaboradoresDeProyecto);

export default router;