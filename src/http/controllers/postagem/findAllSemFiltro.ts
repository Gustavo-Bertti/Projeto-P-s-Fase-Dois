import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { makeListPostagensSemFiltroUseCase } from "@/use-cases/factory/make-list-postagens-sem-filtro-use-case";

export async function findAllSemFiltro(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10)
  });

  const { page, limit } = querySchema.parse(request.query);

  const useCase = makeListPostagensSemFiltroUseCase();

  const postagens = await useCase.handler({ page, limit });

  return reply.send(postagens);
}
