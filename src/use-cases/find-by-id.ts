import { IPostagemRepository } from "@/repositories/postagem.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class FindByIdUseCase{
    constructor(private postagemRepository: IPostagemRepository) {}

    async handler(id: string) {
        const post = await this.postagemRepository.findById(id);

        if(!post)throw new ResourceNotFoundError()

        return post;
    }
}