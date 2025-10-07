import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findByAllPosts } from "./findByAllPosts";
import { findById } from "./findById";
import { update } from "./update";
import { remove } from "./delete";
import { search } from "./search";
import { findAllSemFiltro } from "./findAllSemFiltro";
import { findByUserId } from "./findByUserId";

export async function postagemRoutes(app: FastifyInstance) {
    app.get('/postagem', {
        schema: {
            tags: ['Postagem'],
            summary: 'Listar todos posts ativos para os alunos',
            querystring: {
                type: 'object',
                properties: {
                    page: { type: 'number', default: 1 },
                    limit: { type: 'number', default: 10 }
                }
            },
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
    }, findByAllPosts);

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
    }, findById);
        app.get("/postagem/usuario/:idUsuario", {
        schema: {
            tags: ["Postagem"],
            summary: "Buscar postagens pelo ID do usuário",
            params: {
                type: "object",
                required: ["idUsuario"],
                properties: {
                    idUsuario: { type: "string", format: "uuid" },
                },
            },
            response: {
                200: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            titulo: { type: "string" },
                            conteudo: { type: "string" },
                            usuario: {
                                type: "object",
                                properties: {
                                    nome: { type: "string" },
                                    email: { type: "string" },
                                    id: { type: "string", format: "uuid" },
                                    idTipo: {
                                        type: "object",
                                        properties: {
                                            nome: { type: "string" },
                                            id: { type: "number" },
                                        },
                                    },
                                },
                            },
                            id: { type: "string", format: "uuid" },
                            dataCriacao: { type: "string", format: "date-time" },
                            dataAtualizacao: { type: "string", format: "date-time" },
                            ativo: { type: "boolean" },
                            idUsuario: { type: "string", format: "uuid" },
                        },
                        required: [
                            "titulo",
                            "conteudo",
                            "usuario",
                            "id",
                            "dataCriacao",
                            "dataAtualizacao",
                            "ativo",
                            "idUsuario",
                        ],
                    },
                },
                404: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                    example: {
                        message: "Nenhuma postagem encontrada para este usuário",
                    },
                },
            },
        },
    }, findByUserId);

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
                        'idUsuario',
                    ],
                },
            },
        },
    }, create);

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
                required: ['titulo', 'conteudo'],
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
    }, update);

    app.delete('/postagem/:id', {
        schema: {
            tags: ['Postagem'],
            summary: 'Deletar uma postagem pelo ID',
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
                        message: { type: 'string' },
                    },
                    example: { message: 'Postagem deletada com sucesso' },
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
    }, remove);

    app.get('/postagem/search', {
        schema: {
            tags: ['Postagem'],
            summary: 'Buscar postagens por termo no título ou conteúdo',
            querystring: {
                type: 'object',
                required: ['termo'],
                properties: {
                    termo: { type: 'string' },
                },
            },
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
    }, search);
    app.get('/postagem/sem-filtro', {
        schema: {
            tags: ['Postagem'],
            summary: 'Listar todas as postagens sem filtro (para professores)',
            querystring: {
                type: 'object',
                properties: {
                    page: { type: 'number', default: 1 },
                    limit: { type: 'number', default: 10 }
                }
            },
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
                                        }
                                    }
                                }
                            },
                            id: { type: 'string', format: 'uuid' },
                            dataCriacao: { type: 'string', format: 'date-time' },
                            dataAtualizacao: { type: 'string', format: 'date-time' },
                            ativo: { type: 'boolean' },
                            idUsuario: { type: 'string', format: 'uuid' },
                        },
                        required: ['titulo', 'conteudo', 'usuario', 'id', 'dataCriacao', 'dataAtualizacao', 'ativo', 'idUsuario']
                    }
                }
            }
        }
    }, findAllSemFiltro);
}
