import { Request, Response } from "express";
import { ServiceUser } from "../services/ServiceUser";
import { generateToken } from "../utils/jwt";

const service = new ServiceUser();

export class ControllerAuth {

    async register(req: Request, res: Response) {
        try {
            const user = await service.criarUser(req.body);

            const token = generateToken({
                id: user.idUser,
                email: user.emailUser
            });

            const { senharUser, ...safeUser } = user;

            return res.status(201).json({
                user: safeUser,
                token
            });

        } catch (e: any) {
            return res.status(400).json({
                message: e.message
            });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "E-mail e senha são obrigatórios"
                });
            }

            const user = await service.buscarPorEmail(email);

            if (!user) {
                return res.status(401).json({
                    message: "E-mail ou senha inválidos"
                });
            }

            const valid = await user.validatePassword(password);

            if (!valid) {
                return res.status(401).json({
                    message: "E-mail ou senha inválidos"
                });
            }

            const token = generateToken({
                id: user.idUser,
                email: user.emailUser
            });

            const { senharUser, ...safeUser } = user;

            return res.status(200).json({
                user: safeUser,
                token
            });

        } catch (e: any) {
            return res.status(500).json({
                message: e.message
            });
        }
    }
}