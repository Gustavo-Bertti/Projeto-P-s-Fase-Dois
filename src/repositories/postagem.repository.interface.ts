import { IPostagem } from "@/entities/model/postagem.interface";

export interface IPostagemRepository {
    create(postagem: IPostagem): Promise<IPostagem>;
}