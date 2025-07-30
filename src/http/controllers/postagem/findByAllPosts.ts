import { makeFindByAllPostsUseCase } from "@/use-cases/factory/make-find-by-all-posts-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function findByAllPosts(request: FastifyRequest, reply: FastifyReply) {
    
    const registerQueryShcema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10)
    })

    const {page, limit} = registerQueryShcema.parse(request.params);

    const findByAllPosts = makeFindByAllPostsUseCase();

    const posts = await findByAllPosts.handler(page,limit);

    return reply.status(200).send(posts);

}