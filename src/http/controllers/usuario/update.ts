import { makeUpdateUsuarioUseCase } from "@/use-cases/factory/make-update-usuario-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function updateUsuario(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    senha: z.string().optional(),
    idTipo: z.number(),
  });

  const registerParamsSchema = z.object({
    id: z.string().uuid("ID inválido"),
  });

  const { nome, email, senha, idTipo } = registerBodySchema.parse(request.body);
  const { id } = registerParamsSchema.parse(request.params);

  const updateUsuarioUseCase = makeUpdateUsuarioUseCase();

  const updatedUsuario = await updateUsuarioUseCase.handler(id, {
    nome,
    email,
    ...(senha && { senha }),
    idTipo,
  });

  return reply.status(200).send(updatedUsuario);
}
