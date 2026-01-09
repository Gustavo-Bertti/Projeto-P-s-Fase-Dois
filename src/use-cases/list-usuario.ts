// src/use-cases/list-usuario.ts
import { IUsuarioRepository } from "@/repositories/usuario.repository.interface";

export class ListUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async handler(params: {
    page: number;
    limit: number;
    search?: string;
    idTipo: number;
  }) {
    return this.usuarioRepository.list(params);
  }
}