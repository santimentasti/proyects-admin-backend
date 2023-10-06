import express from 'express';
import { registrarUsuario } from '../../controllers/registroController';

const router = express.Router();

router.post('/', registrarUsuario);

export default router;