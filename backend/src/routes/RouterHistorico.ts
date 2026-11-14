import { Router } from 'express'
import { ControllerHistorico } from '../controller/ControllerHistorico'
import { authMiddleware } from  '../middleware/AuthMiddleware';

const router = Router()
const controller = new ControllerHistorico()
router.use(authMiddleware);

router.get('/', controller.list.bind(controller))
router.post('/criar', controller.criarHistorico.bind(controller))
router.patch("/:id/update", controller.update.bind(controller))
router.delete("/:id/delete", controller.remove.bind(controller))

export default router