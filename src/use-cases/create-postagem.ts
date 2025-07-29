import { IPostagem } from "@/entities/model/postagem.interface";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";

export class CreatePostagemUseCase{
  constructor(private postagemRepository: IPostagemRepository) {}

  async handler(postagem: IPostagem): Promise<IPostagem> {
    return this.postagemRepository.create(postagem);
  }
}