import { IPostagem } from "@/entities/model/postagem.interface";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";

export class FindByAllPostsUseCase {
    constructor(private postagemRepository: IPostagemRepository) {}

    async handler(page: number, limit: number): Promise<IPostagem[]> {
        return await this.postagemRepository.findByAllPosts(page, limit);
    }
}