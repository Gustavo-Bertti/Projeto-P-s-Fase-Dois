import { UsuarioRepository } from "@/repositories/typeorm/usuario.repository";
import { LoginUsuarioUseCase } from "../login-usuario";

export function makeLoginUsuarioUseCase() {
    const usuarioRepository = new UsuarioRepository();
    const loginUsuarioUseCase = new LoginUsuarioUseCase(usuarioRepository);

    return loginUsuarioUseCase;
}