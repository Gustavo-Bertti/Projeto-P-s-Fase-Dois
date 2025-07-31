import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { UpdatePostagemUseCase } from "../update-postagem";

export function makeUpdatePostagemUseCase() {
    const postagemRepository = new PostagemRepository();
    const updatePostagemUseCase = new UpdatePostagemUseCase(postagemRepository);

    return updatePostagemUseCase;
}