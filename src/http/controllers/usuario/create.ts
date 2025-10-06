import { makeCreateUsuarioUseCase } from "@/use-cases/factory/make-create-usuario.use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        nome: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido"),
        senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
        idTipo: z.number(),
    });

    const { nome, email, senha, idTipo } = registerBodySchema.parse(request.body);

    const createUsuarioUseCase = makeCreateUsuarioUseCase();

    const usuario = await createUsuarioUseCase.handler({
        nome,
        email,
        senha,
        idTipo
    });

    return reply.status(201).send(usuario);
}