import { Router } from 'express'
import { ControllerUSer } from '../controller/ControllerUser'
import { deflate } from 'zlib'
import { authMiddleware } from "../middleware/AuthMiddleware";

const router = Router()
const controller = new ControllerUSer()
router.use(authMiddleware)


router.post("/cpf", controller.buscarPorCpf.bind(controller))
router.patch("/:id/update", controller.atualizarDados.bind(controller))

export default router