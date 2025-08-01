import { IPostagem } from "@/entities/model/postagem.interface";

export interface IPostagemRepository {
    findByAllPosts(page: number, limit: number): Promise<IPostagem[]>;
    findById(id: string): Promise<IPostagem | null>;
    create(postagem: IPostagem): Promise<IPostagem>;
    update(id: string, postagem: IPostagem): Promise<IPostagem | null>;
}