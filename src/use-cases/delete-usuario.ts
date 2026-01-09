import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class DeleteUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async handler(id: string): Promise<void> {
    const deleted = await this.usuarioRepository.delete(id);

    if (!deleted) throw new ResourceNotFoundError();
  }
}
