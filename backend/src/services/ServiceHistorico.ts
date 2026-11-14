import { BadRequestException } from "@nestjs/common";
import { AppDataSource } from "../config/data-source";
import { HistoricoSaude } from "../models/HistoricoSaude";


export class ServiceHistorico {

    private HistorRepo = AppDataSource.getRepository(HistoricoSaude);

    async criarHistorico(data: HistoricoSaude) {
        const historico = await this.HistorRepo.create(data);
        return await this.HistorRepo.save(historico);
    }

    async findAll() {
        try {
            const historico = this.HistorRepo.find();
            return (await historico).map((u) => {
                const clone: any = { ...u };
                delete clone.password;

                return clone;
            });
        } catch (e) {
            console.log("Erro: " + e);
        }
    }

}

