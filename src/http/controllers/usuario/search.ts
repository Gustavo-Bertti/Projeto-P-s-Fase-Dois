import { makeSearchUsuarioUseCase } from "@/use-cases/factory/make-search-usuario-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function searchUsuario(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const querySchema = z.object({
    q: z.string().min(1),
  });

  const { q } = querySchema.parse(request.query);

  const searchUsuarioUseCase = makeSearchUsuarioUseCase();

  const usuarios = await searchUsuarioUseCase.handler(q);

  return reply.status(200).send(usuarios);
}
