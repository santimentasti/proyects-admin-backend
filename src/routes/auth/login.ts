import express, { Request, Response } from 'express';
import { iniciarSesion } from '../../controllers/loginController';

const router = express.Router();

router.post('/', iniciarSesion);

export default router;