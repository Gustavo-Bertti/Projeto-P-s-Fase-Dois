import { PostagemRepository } from "@/repositories/postagem.repository";
import { CreatePostagemUseCase } from "@/use-cases/create-postagem";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    
    const registerBodySchema = z.object({
        titulo: z.string(),
        conteudo: z.string(),
        dataCriacao: z.coerce.date(),
        usuario_id: z.number()
    })

    const {titulo, conteudo, dataCriacao, usuario_id }= registerBodySchema.parse(request.body)

    try {
        const postagemRepository = new PostagemRepository
        const createPostagemUseCase = new CreatePostagemUseCase(postagemRepository)
        await createPostagemUseCase.handler({titulo, conteudo, dataCriacao, usuario_id})
        return reply.status(201)
    } catch (error) {
        console.error(error)
        throw new Error('Internal Server Error')
    }
}