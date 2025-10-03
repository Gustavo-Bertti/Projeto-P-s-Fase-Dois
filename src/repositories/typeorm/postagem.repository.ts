import { IPostagem } from "@/entities/model/postagem.interface";
import { IPostagemRepository } from "../postagem.repository.interface";
import { Repository, ILike } from "typeorm";
import { Postagem } from "@/entities/postagem.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";


export class PostagemRepository implements IPostagemRepository {

    private repository: Repository<Postagem>;

    constructor() {
        this.repository = appDataSource.getRepository(Postagem);
    }
    async findByAllPosts(page: number, limit: number): Promise<IPostagem[]> {
        return await this.repository.find({
            relations: ['usuario'],
            skip: (page - 1) * limit,
            take: limit,
            where: { ativo: true }
        })
    }
    async findById(id: string): Promise<IPostagem | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ['usuario']
        });
    }
    async create(postagem: IPostagem): Promise<IPostagem> {
        if (!postagem.dataCriacao) {
            delete postagem.dataCriacao;
        }
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
    async findAllWithoutFilter(page: number, limit: number): Promise<IPostagem[]> {
        return await this.repository.find({
            relations: ['usuario'],
            skip: (page - 1) * limit,
            take: limit,
            order: { dataCriacao: "DESC" }
        });
    }

    async delete(id: string): Promise<boolean> {
        const repo = appDataSource.getRepository(Postagem);
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
    async searchByNome(termo: string): Promise<IPostagem[]> {
        const repo = appDataSource.getRepository(Postagem);

        return repo.createQueryBuilder('postagem')
            .leftJoinAndSelect('postagem.usuario', 'usuario')
            .leftJoinAndSelect('usuario.tipo', 'tipo')
            .where('postagem.titulo ILIKE :termo', { termo: `%${termo}%` })
            .orWhere('postagem.conteudo ILIKE :termo', { termo: `%${termo}%` })
            .orderBy('postagem.dataCriacao', 'DESC')
            .getMany();
    }

}

