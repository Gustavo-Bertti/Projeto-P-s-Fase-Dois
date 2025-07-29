import { makeCreatePostagemUseCase } from "@/use-cases/factory/make-create-postagem-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request : FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        titulo: z.string().min(1, "Título é obrigatório"),
        conteudo: z.string().min(1, "Conteúdo é obrigatório"),
        idUsuario: z.string().uuid()
    })
  
    const { titulo, conteudo, idUsuario } = registerBodySchema.parse(request.body);

    const createPostagemUseCase = makeCreatePostagemUseCase();

    const postagem = await createPostagemUseCase.handler({
        titulo,
        conteudo,
        idUsuario: idUsuario
    });

    return reply.status(201).send(postagem);
}