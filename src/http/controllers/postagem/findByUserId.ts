import { makeFindByUserIdUseCase } from "@/use-cases/factory/make-find-by-user-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function findByUserId(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
        idUsuario: z.string().uuid("ID de usuário inválido"),
    });

    const { idUsuario } = paramsSchema.parse(request.params);

    const findByUserIdUseCase = makeFindByUserIdUseCase();

    const posts = await findByUserIdUseCase.handler(idUsuario);

    return reply.status(200).send(posts);
}
