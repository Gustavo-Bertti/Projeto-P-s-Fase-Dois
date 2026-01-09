import { IUsuario } from "@/entities/model/usuario.interface";
import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class UpdateUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async handler(id: string, usuario: IUsuario): Promise<IUsuario> {
    const usuarioExisting = await this.usuarioRepository.update(id, usuario);

    if (!usuarioExisting) throw new ResourceNotFoundError();

    return usuarioExisting;
  }
}
