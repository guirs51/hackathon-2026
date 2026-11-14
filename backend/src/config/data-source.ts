import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from "dotenv";

import { User } from '../models/User';
import { HistoricoSaude } from '../models/HistoricoSaude';
// import { Post } from '../models/Post';

// Carrega as variáveis de ambiente do arquivo .env para o process.env
dotenv.config();


const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT || "3306"),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User,HistoricoSaude]
});