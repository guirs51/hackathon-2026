import { Request, Response } from 'express'
import { ServiceUser } from "../services/ServiceUser"

const service = new ServiceUser()

export class ControllerUSer {

    async criarUser(req: Request, res: Response) {
        try {
            const user = await service.criarUser(req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    async buscarPorCpf(req: Request, res: Response) {
        try {
            const { cpfUser } = req.body
            const user = await service.buscarPorCpf(cpfUser)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    async atualizarDados(req: Request, res: Response) {
        try {
            const user = await service.update(Number(req.params.id), req.body);
            res.json(user)
        } catch (e: any) {
            res.status(400).json({ mensage: e.mensage })
        }
    }

}