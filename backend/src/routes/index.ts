import { Router } from 'express'
import authRoutes from './AuthRutes'
import userRouter from './RouterUser'
import historicoRouter from './RouterHistorico'



const router = Router()

router.use('/auth', authRoutes)
router.use('/user', userRouter)
router.use('/historico', historicoRouter)

export default router