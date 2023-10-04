import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 8080;
const prisma = new PrismaClient();

app.use(express.json())

// Ruta de ejemplo para consultar datos de la base de datos
app.get('/', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error('Error en la consulta a la base de datos:', error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
