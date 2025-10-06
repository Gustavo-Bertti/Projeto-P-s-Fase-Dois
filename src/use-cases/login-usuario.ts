import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";

export class LoginUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async handler(email: string, senha: string): Promise<{ idUsuario?: string, idTipo?: number } | null> {
        return await this.usuarioRepository.login(email, senha);
    }
}