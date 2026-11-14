import { AppDataSource } from "../config/data-source";
import User from "../models/User";

export class ServiceUser {
    private userRepo = AppDataSource.getRepository(User);

    async criarUser(data: User) {
        const emailExist = await this.userRepo.findOne({
            where: { emailUser: data.emailUser }
        });

        if (emailExist) {
            throw new Error("E-mail já cadastrado");
        }

        if (data.cpfUser) {
            const cpfExist = await this.userRepo.findOne({
                where: { cpfUser: data.cpfUser }
            });

            if (cpfExist) {
                throw new Error("CPF já cadastrado");
            }
        }

        const user = this.userRepo.create(data);
        return await this.userRepo.save(user);
    }

    async buscarPorCpf(cpf: string) {
        const user = await this.userRepo.findOne({
            where: { cpfUser: cpf }
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const { senharUser, ...safeUser } = user;
        return safeUser;
    }

    async buscarPorId(id: number) {
        const user = await this.userRepo.findOne({
            where: { idUser: id }
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const { senharUser, ...safeUser } = user;
        return safeUser;
    }

    async buscarPorEmail(email: string) {
        // Retorna a entidade original para permitir validatePassword()
        return await this.userRepo.findOne({
            where: { emailUser: email }
        });
    }

    async update(id: number, data: Partial<User>) {
        const user = await this.userRepo.findOne({
            where: { idUser: id }
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (data.emailUser && data.emailUser !== user.emailUser) {
            const emailExist = await this.userRepo.findOne({
                where: { emailUser: data.emailUser }
            });

            if (emailExist) {
                throw new Error("E-mail já cadastrado");
            }
        }

        if (data.cpfUser && data.cpfUser !== user.cpfUser) {
            const cpfExist = await this.userRepo.findOne({
                where: { cpfUser: data.cpfUser }
            });

            if (cpfExist) {
                throw new Error("CPF já cadastrado");
            }
        }

        Object.assign(user, data);

        return await this.userRepo.save(user);
    }
}