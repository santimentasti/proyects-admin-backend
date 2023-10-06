import express from 'express';
import registroRouter from './registro';
import loginRouter from './login';
import logoutRouter from './logout';
import usuarioAutenticadoRouter from './usuarioAutenticado';

const router = express.Router();

// Rutas de registro
router.use('/registro', registroRouter);

// Rutas de inicio de sesión
router.use('/login', loginRouter);

// Rutas de cierre de sesión
router.use('/logout', logoutRouter);

router.use('/usuario-autenticado', usuarioAutenticadoRouter)

export default router;