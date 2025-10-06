import { makeLoginUsuarioUseCase } from "@/use-cases/factory/make-login-usuario-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function login(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        email: z.string().email("Email inválido"),
        senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    });

    const { email, senha } = registerBodySchema.parse(request.body);

    const loginUsuarioUseCase = makeLoginUsuarioUseCase();

    const token = await loginUsuarioUseCase.handler(email, senha);

    if (!token) {
        return reply.status(401).send({ message: "Credenciais inválidas" });
    }

    return reply.status(200).send({ token });

}