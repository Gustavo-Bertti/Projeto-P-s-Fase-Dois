import { IPostagem } from "@/entities/model/postagem.interface";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";

interface IListAllPostagensSemFiltroRequest {
  page: number;
  limit: number;
}

export class ListAllPostagensSemFiltroUseCase {
  constructor(private postagemRepository: IPostagemRepository) {}

  async handler({ page, limit }: IListAllPostagensSemFiltroRequest): Promise<IPostagem[]> {
    return await this.postagemRepository.findAllWithoutFilter(page, limit);
  }
}
