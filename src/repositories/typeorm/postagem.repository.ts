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
    async findByAllPosts(page: number, limit: number): Promise<IPostagem[]> {
        return await this.repository.find({
            relations:['usuario'],
            skip: (page - 1) * limit,
            take: limit,
            where:{ativo:true}
        })
    }
    async findById(id: string): Promise<IPostagem | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ['usuario']
        });
    }
    async create(postagem: IPostagem): Promise<IPostagem> {
       return await this.repository.save(postagem);
    }

    async update(id: string, postagem: IPostagem): Promise<IPostagem | null> {
        const existingPostagem = await this.repository.findOne({ where: { id } });
        if (!existingPostagem) {
            return null;
        }
        Object.assign(existingPostagem, postagem);
        return await this.repository.save(existingPostagem);
    }
}