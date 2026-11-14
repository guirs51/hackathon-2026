import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne
} from "typeorm";

import User from "./User";

@Entity("historico_saude")
export class HistoricoSaude {

    @PrimaryGeneratedColumn()
    id_historico_saude!: number;

    @Column({ type: "varchar", length: 100 })
    historico_familiar!: string;

    @Column({ type: "varchar", length: 50 })
    doenca!: string;

    @Column({ type: "varchar", length: 50 })
    alergia!: string;

    @Column({ type: "varchar", length: 60 })
    dependencia_quimica!: string;

    @Column({ type: "varchar", length: 60 })
    medicamento!: string;

    @OneToOne(() => User, (user) => user.historicosSaude)
    @JoinColumn({ name: "idUser" })
    user!: User;
}