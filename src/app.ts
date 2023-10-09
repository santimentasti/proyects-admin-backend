import express from "express";
import cors from "cors";
import authRouter from "./routes/auth//auth";
import proyectosRouter from "./routes//proyectos";
import tareasRouter from "./routes//tareas";
import usuariosRouter from "./routes//usuarios";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/proyectos", proyectosRouter);
app.use("/tareas", tareasRouter);
app.use("/usuarios", usuariosRouter);

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
