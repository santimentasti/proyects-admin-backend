import express from "express";
import session from "express-session";
import crypto from "crypto";
import cors from "cors";
import authRouter from "./routes/auth//auth";
import proyectosRouter from "./routes//proyectos";
import tareasRouter from "./routes//tareas";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
const generateRandomSecret = () => {
  return crypto.randomBytes(32).toString("hex");
};

app.use(
  session({
    secret: generateRandomSecret(),
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/auth", authRouter);
app.use("/proyectos", proyectosRouter);
app.use("/tareas", tareasRouter);

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
