import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findByAllPosts } from "./findByAllPosts";
import { findById } from "./findById";
import { update } from "./update";

export async function postagemRoutes(app:FastifyInstance) {
    app.get('/postagem', findByAllPosts)
    app.get('/postagem/:id', findById)
    app.post('/postagem', create)
    app.put('/postagem/:id',update)
}