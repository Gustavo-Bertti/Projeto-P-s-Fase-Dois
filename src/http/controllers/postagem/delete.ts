import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { makeDeletePostagemUseCase } from "@/use-cases/factory/make-delete-postagem-use-case";

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid()
  });

  const { id } = paramsSchema.parse(request.params);

  const deletePostagemUseCase = makeDeletePostagemUseCase();
  const sucesso = await deletePostagemUseCase.handler(id);

  if (!sucesso) {
    return reply.status(404).send({ mensagem: "Postagem não encontrada" });
  }

  return reply.status(204).send();
}
