import { DataSource } from "typeorm";
import { env } from "@/env";
import { Postagem } from "@/entities/postagem.entity";
import { Usuario } from "@/entities/usuario.entity";
import { Tipo } from "@/entities/tipo.entity";

export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities:[Postagem,Usuario,Tipo],
    logging: env.ENV === 'development',
})

appDataSource.initialize()
.then(() => {
    console.log("Data Base with TypeORM connected successfully");
})
.catch((error) => {
    console.error("Error connecting to the Data Base with TypeORM:", error);
})