import { AppDataSource } from "../config/data-source";
import User from "../models/User";

export class UserRepo {
    private userRepo = AppDataSource.getRepository(User);

    async criarUser(data: User) {
        const user = await this.userRepo.create(data);
        return await this.userRepo.save(user);
    }

    async buscarPorId(id: number) {
        try {
            const user = await this.userRepo.findOne({ where: { idUser: id }, });
            const clone: any = { ...user };
            delete clone.password;
            return clone;
        } catch (e) {
            console.log("Erro: " + e);
        }
    }

    async BuscarPorCpf(cpf: string) {
        try {
            const user = await this.userRepo.findOne({ where: { cpfUser: cpf }, });
            const clone: any = { ...user };
            delete clone.password;
            return clone;
        } catch (e) {
            console.log("Erro: " + e);
        }
    }
}

export default UserRepo