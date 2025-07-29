import { DataSource } from "typeorm";
import { env } from "@/env";
import { Postagem } from "@/entities/postagem.entity";
import { Usuario } from "@/entities/usuario.entity";
import { Tipo } from "@/entities/tipo.entity";

export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities:[Postagem,Usuario,Tipo],
    logging: env.NODE_ENV === 'development',
})

appDataSource.initialize()
.then(() => {
    console.log("Data Base with TypeORM connected successfully");
})
.catch((error) => {
    console.error("Error connecting to the Data Base with TypeORM:", error);
})