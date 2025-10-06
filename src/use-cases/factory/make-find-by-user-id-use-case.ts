import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { FindByUserIdUseCase } from "../find-by-user-id";

export function makeFindByUserIdUseCase() {
    const postagemRepository = new PostagemRepository();
    const findByUserIdUseCase = new FindByUserIdUseCase(postagemRepository);

    return findByUserIdUseCase;
}
