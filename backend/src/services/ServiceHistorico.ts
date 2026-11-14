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

        async update(id: number, data: Partial<HistoricoSaude>) {
        try {
            const historico = await this.HistorRepo.findOne({ where: { id_historico_saude: id } });
            if (!historico) throw new Error("historico não encontrado");

            const { ...rest } = data;

            Object.assign(historico, rest);

            return await this.HistorRepo.save(historico);
        } catch (e) {
            console.log(e)
        }
    }

       async remove(id: number) {
        try {
            const material = await this.HistorRepo.findOne({ where: { id_historico_saude: id } });

            if (!material) throw new Error("material não encontrado");

            await this.HistorRepo.remove(material);

            return { mensagem: "material deletado" };
        } catch (e) {
            console.log(e)
        }
    }

}

