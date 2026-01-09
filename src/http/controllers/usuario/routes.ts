import { FastifyInstance } from "fastify";
import { create } from "./create";
import { login } from "./login";
import { updateUsuario } from "./update";
import { deleteUsuario } from "./delete";
import { searchUsuario } from "./search";
import { listUsuario } from "./list";

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
                        token: {
                            type: 'object',
                            properties: {
                                idUsuario: { type: 'string' },
                                idTipo: { type: 'number' }
                            },
                            required: ['idUsuario', 'idTipo']
                        }
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
    app.put('/usuario/:id', {
  schema: {
    tags: ['Usuário'],
    summary: 'Atualizar um usuário existente',
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
        nome: { type: 'string' },
        email: { type: 'string', format: 'email' },
        senha: { type: 'string' },
        idTipo: { type: 'number' },
      },
      required: ['nome', 'email', 'idTipo'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          nome: { type: 'string' },
          email: { type: 'string' },
          idTipo: { type: 'number' },
        },
      },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
        example: { message: 'Usuário não encontrado' },
      },
    },
  },
}, updateUsuario);

app.delete('/usuario/:id', {
  schema: {
    tags: ['Usuário'],
    summary: 'Remover um usuário',
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', format: 'uuid' },
      },
    },
    response: {
      204: { type: 'null' },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
        example: { message: 'Usuário não encontrado' },
      },
    },
  },
}, deleteUsuario);

app.get('/usuario/search', {
  schema: {
    tags: ['Usuário'],
    summary: 'Buscar usuários por palavra-chave',
    querystring: {
      type: 'object',
      required: ['q'],
      properties: {
        q: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            nome: { type: 'string' },
            email: { type: 'string' },
            ativo: { type: 'boolean' },
          },
        },
      },
    },
  },
}, searchUsuario);

    app.get('/usuario', {
    schema: {
        tags: ['Usuário'],
        summary: 'Listar usuários com paginação',
        querystring: {
        type: 'object',
        required: ['idTipo'],
        properties: {
            page: { type: 'number', default: 1 },
            limit: { type: 'number', default: 10 },
            search: { type: 'string' },
            idTipo: { type: 'number' },
        },
        },
        response: {
        200: {
            type: 'object',
            properties: {
            data: { type: 'array' },
            total: { type: 'number' },
            page: { type: 'number' },
            limit: { type: 'number' },
            totalPages: { type: 'number' },
            },
        },
        },
    },
}, listUsuario);


}