import { UsuarioRepository } from "@/repositories/typeorm/usuario.repository";
import { ListUsuarioUseCase } from "../list-usuario";

export function makeListUsuarioUseCase() {
  const usuarioRepository = new UsuarioRepository();
  return new ListUsuarioUseCase(usuarioRepository);
}
