import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { User } from './User'

@Entity("prescricao")
export class Prescricao {

    @PrimaryGeneratedColumn()
    id_prescricao!: number;

    @Column({ type: "varchar", length: 100 })
    procedimento!: string;

    @Column({ type: "varchar", length: 60 })
    medicacao!: string;

    @Column({ type: "varchar", length: 100 })
    identificacao_profissional!: string;

    @Column({ type: "date" })
    data_prescricao!: string;

    @Column({ type: "varchar", length: 200 })
    evolucao_clinica!: string;

    @Column({ type: "varchar", length: 10 })
    desfecho_atendimento!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_usuario" })
    user!: User;
}