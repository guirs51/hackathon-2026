import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";

import {User} from './User'

@Entity("alerta")
export class Alerta {

    @PrimaryGeneratedColumn()
    id_alerta!: number;

    @Column({ type: "int" })
    id_usuario!: number;

    @Column({ type: "varchar", length: 11 })
    contato_emergencia!: string;

    @Column({ type: "time" })
    horario!: string;

    @Column({ type: "varchar", length: 50, nullable: true })
    localUser?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_usuario" })
    user!: User;
}