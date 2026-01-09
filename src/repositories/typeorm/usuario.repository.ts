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

    async login(email: string, senha: string): Promise<{ idUsuario?: string, idTipo?: number } | null> {
        const user = await this.repository.findOne({ where: { email, senha } });
        if (user)
            return { idUsuario: user?.id, idTipo: user?.tipo.id };
        return null;

    }
    async update(id: string, usuario: Usuario): Promise<Usuario | null> {
    const existingUsuario = await this.repository.findOne({ where: { id } });

    if (!existingUsuario) {
        return null;
    }

    Object.assign(existingUsuario, usuario);

    return await this.repository.save(existingUsuario);
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.repository.delete({ id });
        return result.affected !== 0;
    }

    async search(query: string) {
        return this.repository
        .createQueryBuilder("usuario")
        .where("usuario.nome ILIKE :query", { query: `%${query}%` })
        .orWhere("usuario.email ILIKE :query", { query: `%${query}%` })
        .getMany();
    }

    async list({page,limit,search,idTipo,}: {page: number;limit: number;search?: string;idTipo: number;}) {
        const qb = this.repository.createQueryBuilder("usuario");

        qb.where("usuario.idTipo = :idTipo", { idTipo });

        if (search) {
            qb.andWhere(
            "(usuario.nome ILIKE :search OR usuario.email ILIKE :search)",
            { search: `%${search}%` }
            );
        }

        qb
            .skip((page - 1) * limit)
            .take(limit)
            .orderBy("usuario.nome", "ASC");

        const [data, total] = await qb.getManyAndCount();

        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }

}