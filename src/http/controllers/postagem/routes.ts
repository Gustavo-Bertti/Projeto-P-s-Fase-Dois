import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findByAllPosts } from "./findByAllPosts";
import { findById } from "./findById";

export async function postagemRoutes(app:FastifyInstance) {
    app.get('/postagem', findByAllPosts)
    app.get('/postagem/:id', findById)
    app.post('/postagem', create)
}