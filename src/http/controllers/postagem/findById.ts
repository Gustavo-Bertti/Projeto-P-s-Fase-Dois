import { makeFindByIdUseCase } from "@/use-cases/factory/make-find-by-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function findById(request: FastifyRequest, reply: FastifyReply) {

    const registerBodySchema = z.object({
        id: z.string().uuid("ID inválido")
    });

    const { id } = registerBodySchema.parse(request.params);

    const findByIdUseCase = makeFindByIdUseCase();

    const post = await findByIdUseCase.handler(id);

    return reply.status(200).send(post);
}