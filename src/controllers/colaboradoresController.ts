import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const obtenerColaboradoresDeProyecto = async (req: Request, res: Response) => {
  const { proyectId } = req.params;

  try {
    // Verificar si el proyecto existe
    const proyecto = await prisma.proyecto.findUnique({
      where: {
        id: Number(proyectId),
      },
    });

    if (!proyecto) {
      return res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
    const colaboradores = await prisma.colaborador.findMany({
      where: {
        proyectoId: Number(proyectId),
      },
    });

    res.json(colaboradores);
  } catch (error) {
    console.error("Error al obtener colaboradores del proyecto", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

export default {
  obtenerColaboradoresDeProyecto
};
