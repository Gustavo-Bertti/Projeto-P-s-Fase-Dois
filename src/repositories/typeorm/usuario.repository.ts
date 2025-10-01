import { Usuario } from "@/entities/usuario.entity";
import { Repository } from "typeorm";
import { IUsuarioRepository } from "../usuario.repository.interface";
import { appDataSource } from "@/lib/typeorm/typeorm";

export class UsuarioRepository implements IUsuarioRepository {

    private repository: Repository<Usuario>;

    constructor() {
        this.repository = appDataSource.getRepository(Usuario);
    }
    async create(usuario: Usuario): Promise<Usuario> {
        usuario.nome = usuario.nome.toUpperCase();
        return await this.repository.save(usuario);
    }

    async login(email: string, senha: string): Promise<string | null> {
        const user = await this.repository.findOne({ where: { email, senha } });
        return user?.id || null;
    }
}