import { Request, Response } from 'express'
import { ServiceHistorico } from '../services/ServiceHistorico'
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

    async update(req: Request, res: Response) {
        try {
            const user = await service.update(Number(req.params.id), req.body)
            res.json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const result = await service.remove(Number(req.params.id))
            res.json(result)
        } catch (e: any) {
            res.status(404).json({ message: e.message })
        }
    }


}