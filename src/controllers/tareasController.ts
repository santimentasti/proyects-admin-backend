import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Obtener todas las tareas
export const obtenerTareas = async (req: Request, res: Response) => {
  try {
    const tareas = await prisma.tarea.findMany();
    res.json(tareas);
  } catch (error) {
    console.error('Error al obtener tareas', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Crear una nueva tarea
export const crearTarea = async (req: Request, res: Response) => {
  const { titulo, descripcion, estado, proyectoId, usuarioId } = req.body;
  try {
    const tarea = await prisma.tarea.create({
      data: {
        titulo,
        descripcion,
        estado,
        proyectoId,
        usuarioId,
      },
    });
    res.json(tarea);
  } catch (error) {
    console.error('Error al crear tarea', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Actualizar una tarea existente
export const actualizarTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { titulo, descripcion, estado } = req.body;
  try {
    const tarea = await prisma.tarea.update({
      where: { id: Number(id) },
      data: { titulo, descripcion, estado },
    });
    res.json(tarea);
  } catch (error) {
    console.error('Error al actualizar tarea', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Eliminar una tarea
export const eliminarTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.tarea.delete({
      where: { id: Number(id) },
    });
    res.json({ mensaje: 'Tarea eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar tarea', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export default {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
};