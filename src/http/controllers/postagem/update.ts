import { makeUpdatePostagemUseCase } from "@/use-cases/factory/make-update-postagem-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function update(request : FastifyRequest, reply: FastifyReply) {
   
    const id = request.params;
    const registerBodySchema  = z.object({
        titulo: z.string().min(1, "Título é obrigatório"),
        conteudo: z.string().min(1, "Conteúdo é obrigatório"),
    });

    const registerParamsSchema = z.object({
        id: z.string().uuid("ID inválido")
    });

    const {titulo, conteudo} = registerBodySchema.parse(request.body);

    const { id: postagemId } = registerParamsSchema.parse(request.params);

    const updatePostagemUseCase = makeUpdatePostagemUseCase();

    const updatedPostagem = await updatePostagemUseCase.handler(postagemId, {titulo, conteudo});

    return reply.status(200).send(updatedPostagem);
}