import { IPostagemRepository } from "@/repositories/postagem.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class FindByUserIdUseCase {
    constructor(private postagemRepository: IPostagemRepository) {}

    async handler(idUsuario: string) {
        const posts = await this.postagemRepository.findByUserId(idUsuario);

        if (!posts || posts.length === 0) {
            throw new ResourceNotFoundError();
        }

        return posts;
    }
}
