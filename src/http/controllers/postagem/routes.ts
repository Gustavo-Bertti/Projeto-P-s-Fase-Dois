import { FastifyInstance } from "fastify";
import { create } from "./create";

export async function postagemRoutes(app:FastifyInstance) {
    app.post('/postagem', create)
}