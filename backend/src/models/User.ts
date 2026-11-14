import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import bycrypt from 'bcrypt';
import { HistoricoSaude } from "./HistoricoSaude";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    idUser!: number

    @Column({ length: 100 })
    nameUser!: string

    @Column({ unique: true, length: 200 })
    emailUser!: string

    @Column({ unique: true, length: 20 })
    cpfUser!: string

    @Column({ length: 20 })
    dataNascimento!: string

    @Column()
    senharUser!: string

    @Column({ type: "varchar", length: 100 })
    endereco!: string;

    @Column({ length: 50 })
    filicao!: string

    @OneToMany(() => HistoricoSaude, (historico) => historico.user)
    historicosSaude!: HistoricoSaude[]

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date


    //salvar a senha antes de salvar ou atualizar dados
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.senharUser.startsWith('$2')) {
            const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);
            this.senharUser = await bycrypt.hash(this.senharUser, rounds);
        }
    }

    async validatePassword(plain: string): Promise<boolean> {
        return bycrypt.compare(plain, this.senharUser)
    }
}

export default User