import { makeDeleteUsuarioUseCase } from "@/use-cases/factory/make-delete-usuario-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteUsuario(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerParamsSchema = z.object({
    id: z.string().uuid("ID inválido"),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const deleteUsuarioUseCase = makeDeleteUsuarioUseCase();

  await deleteUsuarioUseCase.handler(id);

  return reply.status(204).send();
}
