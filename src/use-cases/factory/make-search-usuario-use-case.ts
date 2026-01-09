import { UsuarioRepository } from "@/repositories/typeorm/usuario.repository";
import { SearchUsuarioUseCase } from "../search-by-usuario";
export function makeSearchUsuarioUseCase() {
  const usuarioRepository = new UsuarioRepository();
  const searchUsuarioUseCase = new SearchUsuarioUseCase(usuarioRepository);

  return searchUsuarioUseCase;
}
