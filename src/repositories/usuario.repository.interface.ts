// src/repositories/usuario.repository.interface.ts
import { IUsuario } from "@/entities/model/usuario.interface";

export interface IUsuarioRepository {
  create(usuario: IUsuario): Promise<IUsuario>;
  login(email: string, senha: string): Promise<{ idUsuario?: string; idTipo?: number } | null>;
  update(id: string, usuario: IUsuario): Promise<IUsuario | null>;
  delete(id: string): Promise<boolean>;
  search(query: string): Promise<IUsuario[]>;
  list(params: {page: number;limit: number;search?: string;idTipo: number;}): Promise<{data: IUsuario[];total: number;page: number;limit: number;totalPages: number;}>;

}