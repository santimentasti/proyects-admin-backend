import express from 'express';
import { cerrarSesion } from '../../controllers/logoutController';

const router = express.Router();

router.get('/', cerrarSesion);

export default router;