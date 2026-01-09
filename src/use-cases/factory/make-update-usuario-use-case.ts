import { UsuarioRepository } from "@/repositories/typeorm/usuario.repository";
import { UpdateUsuarioUseCase } from "../update-usuario";

export function makeUpdateUsuarioUseCase() {
  const usuarioRepository = new UsuarioRepository();
  return new UpdateUsuarioUseCase(usuarioRepository);
}
