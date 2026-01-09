import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";

export class SearchUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async handler(query: string) {
    return this.usuarioRepository.search(query);
  }
}
