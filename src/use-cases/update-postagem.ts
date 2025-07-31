import { IPostagem } from "@/entities/model/postagem.interface";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class UpdatePostagemUseCase {
    constructor(private postagemRepository: IPostagemRepository) {}

    async handler(id: string, postagem: IPostagem): Promise<IPostagem | null> {
        const postagemExisting = await this.postagemRepository.update(id, postagem);

        if (!postagemExisting) throw new ResourceNotFoundError();

        return postagemExisting;

    }
}