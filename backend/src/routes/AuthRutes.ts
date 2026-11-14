import { Router } from 'express'
import { ControllerAuth } from '../controller/ControllerAuth'

// import { CreateUserDTO } from '../DTOS/CreateUserDTO'

const router = Router()
const controller = new ControllerAuth()

router.post('/registrar', controller.register.bind(controller))
router.post('/login', controller.login.bind(controller))

export default router