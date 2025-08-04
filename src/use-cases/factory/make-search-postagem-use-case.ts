import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { SearchPostagemUseCase } from "../search-by-postagem";

export function makeSearchPostagemUseCase() {
  const postagemRepository = new PostagemRepository();
  return new SearchPostagemUseCase(postagemRepository);
}
