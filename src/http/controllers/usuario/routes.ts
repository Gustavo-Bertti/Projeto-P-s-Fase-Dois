import { FastifyInstance } from "fastify";
import { create } from "./create";
import { login } from "./login";

export async function usuarioRoutes(app: FastifyInstance) {
    app.post("/usuario", {
        schema: {
            tags: ['Usuario'],
            summary: 'Criar um novo usuario',
            body: {
                type: 'object',
                required: ['nome', 'email', 'senha', 'idTipo'],
                properties: {
                    nome: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                    senha: { type: 'string', minLength: 6 },
                    idTipo: { type: 'number' },
                },
            },
            response: {
                201: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        nome: { type: 'string' },
                        email: { type: 'string', format: 'email' },
                        idTipo: { type: 'number' },
                    },
                    required: [
                        'id',
                        'nome',
                        'email',
                        'idTipo'
                    ],
                },
            },
        },
    }, create);

    app.post("/login", {
        schema: {
            tags: ['Usuario'],
            summary: 'Login do usuario',
            body: {
                type: 'object',
                required: ['email', 'senha'],
                properties: {
                    email: { type: 'string', format: 'email' },
                    senha: { type: 'string', minLength: 6 },
                },
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        token: { type: 'string' },
                    },
                    required: ['token'],
                },
                401: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                    required: ['message'],
                },
            },
        },
    }, login);
}