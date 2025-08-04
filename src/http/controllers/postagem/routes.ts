import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findByAllPosts } from "./findByAllPosts";
import { findById } from "./findById";
import { update } from "./update";
import { findAllSemFiltro } from "./findAllSemFiltro";
import { remove } from "./delete";
import { search } from "./search";

export async function postagemRoutes(app:FastifyInstance) {
    app.get('/postagem', findByAllPosts)
    app.get('/postagem/:id', findById)
    app.post('/postagem', create)
    app.put('/postagem/:id',update)
    app.get('/posts', findAllSemFiltro);
    app.get("/postagem/search", search)
    app.delete("/postagem/:id", remove)
}