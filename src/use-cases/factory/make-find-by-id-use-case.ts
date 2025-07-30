import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { FindByIdUseCase } from "../find-by-id";

export function makeFindByIdUseCase() {
    const postagemRepository = new PostagemRepository();
    const findByIdUseCase = new FindByIdUseCase(postagemRepository);

    return findByIdUseCase;
}