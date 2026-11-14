import { Request, Response } from 'express'
import { ServiceUser } from "../services/ServiceUser"
import { generateToken } from '../utils/jwt' // Importa a função que gera o JWT


const service = new ServiceUser()



export class ControllerAuth {
    async register(req: Request, res: Response) {
        try {
            const user = await service.criarUser(req.body)
            const token = generateToken({ id: user.idUser, email: user.emailUser })
            const safe: any = { ...user }
            delete safe.password
            res.json({ user: safe, token })
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const user = await service.buscarPorEmail(email)
            if (!user) return res.status(404).json({ message: 'Usuário ' + email + ' não encontrado' })
            const valid = await user.validatePassword(password)
            if (!valid) return res.status(404).json({ message: 'Senha inválida' })
            const safe: any = { ...user }
            delete safe.password
            const token = generateToken({ id: user.id, email: user.email })
            res.json({ user: safe, token })
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }


}