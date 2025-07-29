import { IPostagem } from "@/entities/model/postagem.interface";
import { IPostagemRepository } from "../postagem.repository.interface";
import { Repository } from "typeorm";
import { Postagem } from "@/entities/postagem.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";

export class PostagemRepository implements IPostagemRepository {

    private repository:Repository<Postagem>;

    constructor () {
        this.repository = appDataSource.getRepository(Postagem);
    }

    async create(postagem: IPostagem): Promise<IPostagem> {
       return this.repository.save(postagem);
    }
}