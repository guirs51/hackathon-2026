
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
    };
}

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Token não fornecido" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);

        if (typeof decoded === "string" || !("id" in decoded) || !("email" in decoded)) {
            return res.status(401).json({ message: "Token inválido" });
        }

        req.user = {
            id: Number(decoded.id),
            email: String(decoded.email)
        };

        next();
    } catch {
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
};
