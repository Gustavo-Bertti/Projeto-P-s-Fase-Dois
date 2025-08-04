import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findByAllPosts } from "./findByAllPosts";
import { findById } from "./findById";
import { update } from "./update";

export async function postagemRoutes(app: FastifyInstance) {
    app.get('/postagem', {
        schema: {
            tags: ['Postagem'],
            summary: 'Listar todos posts ativos para os alunos',
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            titulo: { type: 'string' },
                            conteudo: { type: 'string' },
                            usuario: {
                                type: 'object',
                                properties: {
                                    nome: { type: 'string' },
                                    email: { type: 'string' },
                                    id: { type: 'string', format: 'uuid' },
                                    idTipo: {
                                        type: 'object',
                                        properties: {
                                            nome: { type: 'string' },
                                            id: { type: 'number' },
                                        },
                                    },
                                },
                            },
                            id: { type: 'string', format: 'uuid' },
                            dataCriacao: { type: 'string', format: 'date-time' },
                            dataAtualizacao: { type: 'string', format: 'date-time' },
                            ativo: { type: 'boolean' },
                            idUsuario: { type: 'string', format: 'uuid' },
                        },
                        required: [
                            'titulo',
                            'conteudo',
                            'usuario',
                            'id',
                            'dataCriacao',
                            'dataAtualizacao',
                            'ativo',
                            'idUsuario',
                        ],
                    },
                },
            },
        },
    }, findByAllPosts)
    app.get('/postagem/:id', {
        schema: {
            tags: ['Postagem'],
            summary: 'Buscar uma postagem pelo ID',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        titulo: { type: 'string' },
                        conteudo: { type: 'string' },
                        usuario: {
                            type: 'object',
                            properties: {
                                nome: { type: 'string' },
                                email: { type: 'string' },
                                id: { type: 'string', format: 'uuid' },
                                idTipo: {
                                    type: 'object',
                                    properties: {
                                        nome: { type: 'string' },
                                        id: { type: 'number' },
                                    },
                                },
                            },
                        },
                        id: { type: 'string', format: 'uuid' },
                        dataCriacao: { type: 'string', format: 'date-time' },
                        dataAtualizacao: { type: 'string', format: 'date-time' },
                        ativo: { type: 'boolean' },
                        idUsuario: { type: 'string', format: 'uuid' },
                    },
                    required: [
                        'titulo',
                        'conteudo',
                        'usuario',
                        'id',
                        'dataCriacao',
                        'dataAtualizacao',
                        'ativo',
                        'idUsuario',
                    ],
                },
                404: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                    example: {
                        message: 'Postagem não encontrada',
                    },
                },
            },
        },
    }, findById)
    app.post('/postagem', {
        schema: {
            tags: ['Postagem'],
            summary: 'Criar uma nova postagem',
            body: {
                type: 'object',
                required: ['titulo', 'conteudo', 'idUsuario'],
                properties: {
                    titulo: { type: 'string' },
                    conteudo: { type: 'string' },
                    idUsuario: { type: 'string', format: 'uuid' },
                },
            },
            response: {
                201: {
                    type: 'object',
                    properties: {
                        titulo: { type: 'string' },
                        conteudo: { type: 'string' },
                        usuario: {
                            type: 'object',
                            properties: {
                                nome: { type: 'string' },
                                email: { type: 'string' },
                                id: { type: 'string', format: 'uuid' },
                                idTipo: {
                                    type: 'object',
                                    properties: {
                                        nome: { type: 'string' },
                                        id: { type: 'number' },
                                    },
                                },
                            },
                        },
                        id: { type: 'string', format: 'uuid' },
                        dataCriacao: { type: 'string', format: 'date-time' },
                        dataAtualizacao: { type: 'string', format: 'date-time' },
                        ativo: { type: 'boolean' },
                        idUsuario: { type: 'string', format: 'uuid' },
                    },
                    required: [
                        'titulo',
                        'conteudo',
                        'usuario',
                        'id',
                        'dataCriacao',
                        'dataAtualizacao',
                        'ativo',
                        'idUsuario',
                    ],
                },
            },
        },
    }, create)
    app.put('/postagem/:id', {
        schema: {
            tags: ['Postagem'],
            summary: 'Atualizar uma postagem existente',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                },
            },
            body: {
                type: 'object',
                properties: {
                    titulo: { type: 'string' },
                    conteudo: { type: 'string' },
                    ativo: { type: 'boolean' },
                },
                required: ['titulo', 'conteudo'], // se esses campos forem obrigatórios no update
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        titulo: { type: 'string' },
                        conteudo: { type: 'string' },
                        usuario: {
                            type: 'object',
                            properties: {
                                nome: { type: 'string' },
                                email: { type: 'string' },
                                id: { type: 'string', format: 'uuid' },
                                idTipo: {
                                    type: 'object',
                                    properties: {
                                        nome: { type: 'string' },
                                        id: { type: 'number' },
                                    },
                                },
                            },
                        },
                        id: { type: 'string', format: 'uuid' },
                        dataCriacao: { type: 'string', format: 'date-time' },
                        dataAtualizacao: { type: 'string', format: 'date-time' },
                        ativo: { type: 'boolean' },
                        idUsuario: { type: 'string', format: 'uuid' },
                    },
                },
                404: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                    example: { message: 'Postagem não encontrada' },
                },
            },
        },
    }, update)
}