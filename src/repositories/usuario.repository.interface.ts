import { IUsuario } from "@/entities/model/usuario.interface";

export interface IUsuarioRepository {
    create(usuario: IUsuario): Promise<IUsuario>;
    login(email: string, senha: string): Promise<string | null>;
}
