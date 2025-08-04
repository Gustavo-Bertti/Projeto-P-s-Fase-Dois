import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { makeSearchPostagemUseCase } from "@/use-cases/factory/make-search-postagem-use-case";

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    termo: z.string().min(1, "Termo de busca é obrigatório")
  });

  const { termo } = querySchema.parse(request.query);

  const searchPostagemUseCase = makeSearchPostagemUseCase();
  const resultados = await searchPostagemUseCase.handler(termo);

  return reply.send(resultados);
}
