import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { FindByAllPostsUseCase} from "../find-by-all-posts";

export function makeFindByAllPostsUseCase() {
    const postagemRepository = new PostagemRepository();
    const findByAllPostsUseCase = new FindByAllPostsUseCase(postagemRepository);

    return findByAllPostsUseCase;
}