// src/http/controllers/usuario/list.ts
import { FastifyReply, FastifyRequest } from "fastify";
import { makeListUsuarioUseCase } from "@/use-cases/factory/make-list-usuario-use-case";

export async function listUsuario(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    page = 1,
    limit = 10,
    search,
    idTipo,
  } = request.query as {
    page?: number;
    limit?: number;
    search?: string;
    idTipo: number;
  };

  const listUsuarioUseCase = makeListUsuarioUseCase();

  const result = await listUsuarioUseCase.handler({
    page,
    limit,
    search,
    idTipo,
  });

  return reply.status(200).send(result);
}
