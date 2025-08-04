import { IPostagemRepository } from "@/repositories/postagem.repository.interface";

export class DeletePostagemUseCase {
  constructor(private postagemRepository: IPostagemRepository) {}

  async handler(id: string): Promise<boolean> {
    const postagem = await this.postagemRepository.findById(id);
    if (!postagem) {
      return false;
    }

    return await this.postagemRepository.delete(id);
  }
}
