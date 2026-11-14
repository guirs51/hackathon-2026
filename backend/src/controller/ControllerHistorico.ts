import { Request, Response } from 'express'
import { ServiceHistorico } from '../services/ServiceHIstorico'
const service = new ServiceHistorico()

export class ControllerHistorico {

    async criarHistorico(req: Request, res: Response) {
        try {
            const user = await service.criarHistorico(req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    async list(req: Request, res: Response) {
        const users = await service.findAll()
        res.json(users)
    }

}