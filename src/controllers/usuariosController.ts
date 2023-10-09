import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Obtener todos los usuarios
export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

export default {
  obtenerUsuarios,
};
