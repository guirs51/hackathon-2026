import { BadRequestException } from "@nestjs/common";
import { AppDataSource } from "../config/data-source";
import User from "../models/User";

export class ServiceUser {

    private userRepo = AppDataSource.getRepository(User);

    async criarUser(data: User) {
        const emailExist = await this.userRepo.findOne({
            where: { emailUser: data.emailUser },
        });
        const cpfExist = await this.userRepo.findOne({
            where: { cpfUser: data.cpfUser },
        });

        if (emailExist) throw new BadRequestException("E-mail já cadastrado");
        if (cpfExist) throw new BadRequestException("CPF já cadastrado");

        const user = await this.userRepo.create(data);
        return await this.userRepo.save(user);
    }

    async buscarPorCpf(cpf: string) {
        const user = await this.userRepo.findOne({ where: { cpfUser: cpf } })
        if (!user) throw new Error("Usuario não encotrado");
        const clone: any = { ...user };
        delete clone.password;
        return clone;
    }

    async buscarPorId(id: number) {
        const user = await this.userRepo.findOne({ where: { idUser: id } })
        if (!user) throw new Error("Usuario não encotrado");
        const clone: any = { ...user };
        delete clone.password;
        return clone;
    }

    async buscarPorEmail(email: string) {
        const user = await this.userRepo.findOne({ where: { emailUser: email } })
        if (!user) throw new Error("Usuario não encotrado");
        const clone: any = { ...user };
        delete clone.password;
        return clone;
    }

    async update(id: number, data: Partial<User>) {
        const user = await this.userRepo.findOne({ where: { idUser: id } });
        if (!user) throw new Error("usuario não encontrado");

        if (data.emailUser) {
            const emailExist = await this.userRepo.findOne({ where: { emailUser: data.emailUser } });
            if (emailExist) throw new BadRequestException("E-mail já cadastrado");
        }

        if (data.cpfUser) {
            const cpfExist = await this.userRepo.findOne({ where: { cpfUser: data.cpfUser } })
            if (cpfExist) throw new BadRequestException("Esse CPF ja esta sendo usado")
        }

        if (data.senharUser) {
            user.senharUser = data.senharUser;
        }

        const { senharUser, ...rest } = data;

        Object.assign(user, rest);

        return await this.userRepo.save(user);
    }
}

