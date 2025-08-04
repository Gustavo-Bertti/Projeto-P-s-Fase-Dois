import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { ListAllPostagensSemFiltroUseCase } from "../find-by-all-posts-sem-filtro";

export function makeListPostagensSemFiltroUseCase() {
  const postagemRepository = new PostagemRepository();
  const listPostagensSemFiltroUseCase = new ListAllPostagensSemFiltroUseCase(postagemRepository);

  return listPostagensSemFiltroUseCase;
}
