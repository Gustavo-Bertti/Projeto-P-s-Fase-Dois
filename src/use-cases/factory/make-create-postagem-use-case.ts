import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { CreatePostagemUseCase } from "../create-postagem";

export function makeCreatePostagemUseCase(){
    const postagemRepository = new PostagemRepository();
    const createPostagemUseCase = new CreatePostagemUseCase(postagemRepository);

    return createPostagemUseCase;
}