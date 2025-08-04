import { IPostagemRepository } from "@/repositories/postagem.repository.interface";

export class SearchPostagemUseCase {
  constructor(private postagemRepository: IPostagemRepository) {}

  async handler(termo: string) {
    return this.postagemRepository.searchByNome(termo);
  }
}
