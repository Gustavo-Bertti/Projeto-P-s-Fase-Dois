import { IUsuario } from "@/entities/model/usuario.interface";
import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";

export class CreateUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async handler(usuario: IUsuario): Promise<IUsuario> {
        return await this.usuarioRepository.create(usuario);
    }
}