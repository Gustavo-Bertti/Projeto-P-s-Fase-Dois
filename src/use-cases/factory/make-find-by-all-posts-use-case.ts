import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { FindByAllPostsUseCase} from "../find-by-all-posts";
console.log("Factory carregada", FindByAllPostsUseCase);
export function makeFindByAllPostsUseCase() {
    const postagemRepository = new PostagemRepository();
    const findByAllPostsUseCase = new FindByAllPostsUseCase(postagemRepository);

    return findByAllPostsUseCase;
}