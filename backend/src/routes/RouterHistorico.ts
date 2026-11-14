import { Router } from 'express'
import { ControllerHistorico } from '../controller/ControllerHistorico'

const router = Router()
const controller = new ControllerHistorico()

router.get('/', controller.list.bind(controller))
router.post('/criar', controller.criarHistorico.bind(controller))

export default router