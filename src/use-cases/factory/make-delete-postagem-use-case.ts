import { PostagemRepository } from "@/repositories/typeorm/postagem.repository";
import { DeletePostagemUseCase } from "../delete-postagem";

export function makeDeletePostagemUseCase() {
  const postagemRepository = new PostagemRepository();
  return new DeletePostagemUseCase(postagemRepository);
}
