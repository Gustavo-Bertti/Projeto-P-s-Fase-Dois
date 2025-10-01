import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";

export class LoginUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async handler(email: string, senha: string): Promise<string | null> {
        return await this.usuarioRepository.login(email, senha);
    }
}