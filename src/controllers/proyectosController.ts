import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Obtener todos los proyectos
export const obtenerProyectos = async (req: Request, res: Response) => {
  try {
    const proyectos = await prisma.proyecto.findMany();
    res.json(proyectos);
  } catch (error) {
    console.error("Error al obtener proyectos", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

export const obtenerProyectoPorId = async (req: Request, res: Response) => {
  const { id } = req.params; // ID del proyecto que se pasa como parámetro en la URL

  try {
    const proyecto = await prisma.proyecto.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!proyecto) {
      return res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }

    res.json(proyecto);
  } catch (error) {
    console.error("Error al obtener el proyecto", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

// Crear un nuevo proyecto
export const crearProyecto = async (req: Request, res: Response) => {
  const { nombre, descripcion, usuarioId } = req.body;
  try {
    const proyecto = await prisma.proyecto.create({
      data: {
        nombre,
        descripcion,
        usuarioId,
      },
    });
    res.json(proyecto);
  } catch (error) {
    console.error("Error al crear proyecto", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

// Actualizar un proyecto existente
export const actualizarProyecto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const proyecto = await prisma.proyecto.update({
      where: { id: Number(id) },
      data: { nombre, descripcion },
    });
    res.json(proyecto);
  } catch (error) {
    console.error("Error al actualizar proyecto", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

// Eliminar un proyecto
export const eliminarProyecto = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.proyecto.delete({
      where: { id: Number(id) },
    });
    res.json({ mensaje: "Proyecto eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar proyecto", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};


export const agregarColaborador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { colaboradorId } = req.body;

  try {
    // Verifica si el proyecto existe
    const proyecto = await prisma.proyecto.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!proyecto) {
      return res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }

    // Verifica si el colaborador ya está en la lista de colaboradores del proyecto
    const colaboradorExistente = await prisma.colaborador.findFirst({
      where: {
        proyectoId: Number(id),
        usuarioId: Number(colaboradorId),
      },
    });

    if (colaboradorExistente) {
      return res
        .status(400)
        .json({ mensaje: "El colaborador ya está en el proyecto" });
    }

    // Agrega al colaborador a la lista de colaboradores del proyecto
    await prisma.colaborador.create({
      data: {
        proyectoId: Number(id),
        usuarioId: Number(colaboradorId),
      },
    });

    res.status(200).json({ mensaje: "Colaborador agregado con éxito" });
  } catch (error) {
    console.error("Error al agregar el colaborador", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};


export default {
  obtenerProyectos,
  obtenerProyectoPorId,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
  agregarColaborador
};
