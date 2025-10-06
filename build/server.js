"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/app.ts
var import_reflect_metadata = require("reflect-metadata");

// src/lib/typeorm/typeorm.ts
var import_typeorm4 = require("typeorm");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3e3),
  DB_HOST: import_zod.z.string().default("localhost"),
  DB_PORT: import_zod.z.coerce.number().default(5432),
  DB_USER: import_zod.z.string().default("postgres"),
  DB_PASSWORD: import_zod.z.string().default("postgres"),
  DB_NAME: import_zod.z.string().default("projeto_segundo_modulo"),
  DB_SSL: import_zod.z.enum(["disable", "require"]).default("disable")
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid enviroment variables", _env.error.format());
  throw new Error("Invalid enviroment variables");
}
var env = _env.data;

// src/entities/postagem.entity.ts
var import_typeorm3 = require("typeorm");

// src/entities/usuario.entity.ts
var import_typeorm2 = require("typeorm");

// src/entities/tipo.entity.ts
var import_typeorm = require("typeorm");
var Tipo = class {
  constructor(nome) {
    this.nome = nome;
  }
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("increment", { name: "idtipo" })
], Tipo.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    name: "nome",
    type: "varchar",
    length: 100,
    nullable: false
  })
], Tipo.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm.OneToMany)(() => Usuario, (usuario) => usuario.idTipo)
], Tipo.prototype, "usuarios", 2);
Tipo = __decorateClass([
  (0, import_typeorm.Entity)({
    name: "tipo"
  })
], Tipo);

// src/entities/usuario.entity.ts
var Usuario = class {
  constructor(nome, email, tipo) {
    this.nome = nome;
    this.email = email;
    this.tipo = tipo;
  }
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid", { name: "idusuario" })
], Usuario.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "nome", type: "varchar", length: 100, nullable: false })
], Usuario.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "email", type: "varchar", length: 150, unique: true, nullable: false })
], Usuario.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "senha", type: "varchar", length: 255, nullable: false })
], Usuario.prototype, "senha", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)(() => Tipo, (tipo) => tipo.usuarios, {
    nullable: false,
    eager: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm2.JoinColumn)({ name: "idtipo" })
], Usuario.prototype, "tipo", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "idtipo", type: "int" })
], Usuario.prototype, "idTipo", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)(() => Postagem, (postagem) => postagem.idUsuario)
], Usuario.prototype, "postagens", 2);
Usuario = __decorateClass([
  (0, import_typeorm2.Entity)({ name: "usuario" })
], Usuario);

// src/entities/postagem.entity.ts
var Postagem = class {
  constructor(titulo, conteudo, usuario) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    if (typeof usuario === "string") {
      this.idUsuario = usuario;
    } else {
      this.usuario = usuario;
    }
  }
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)("uuid", { name: "idpostagem" })
], Postagem.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    name: "titulo",
    type: "varchar",
    length: 255,
    nullable: false
  })
], Postagem.prototype, "titulo", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    name: "conteudo",
    type: "text",
    nullable: false
  })
], Postagem.prototype, "conteudo", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    name: "datacriacao",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false
  })
], Postagem.prototype, "dataCriacao", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    name: "dataatualizacao",
    type: "timestamp",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: true
  })
], Postagem.prototype, "dataAtualizacao", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    name: "ativo",
    type: "boolean",
    default: true,
    nullable: false
  })
], Postagem.prototype, "ativo", 2);
__decorateClass([
  (0, import_typeorm3.ManyToOne)(() => Usuario, (usuario) => usuario.postagens, { nullable: false, eager: true, onDelete: "CASCADE" }),
  (0, import_typeorm3.JoinColumn)({ name: "idusuario" })
], Postagem.prototype, "usuario", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "idusuario", type: "uuid" })
], Postagem.prototype, "idUsuario", 2);
Postagem = __decorateClass([
  (0, import_typeorm3.Entity)({
    name: "postagem"
  })
], Postagem);

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm4.DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  ssl: env.DB_SSL === "require" ? { rejectUnauthorized: false } : void 0,
  entities: [Postagem, Usuario, Tipo],
  logging: env.ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log("Data Base with TypeORM connected successfully");
}).catch((error) => {
  console.error("Error connecting to the Data Base with TypeORM:", error);
});

// src/app.ts
var import_fastify = __toESM(require("fastify"));

// src/repositories/typeorm/postagem.repository.ts
var PostagemRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Postagem);
  }
  async findByAllPosts(page, limit) {
    return await this.repository.find({
      relations: ["usuario"],
      skip: (page - 1) * limit,
      take: limit,
      where: { ativo: true }
    });
  }
  async findById(id) {
    return await this.repository.findOne({
      where: { id },
      relations: ["usuario"]
    });
  }
  async create(postagem) {
    if (!postagem.dataCriacao) {
      delete postagem.dataCriacao;
    }
    return await this.repository.save(postagem);
  }
  async update(id, postagem) {
    const existingPostagem = await this.repository.findOne({ where: { id } });
    if (!existingPostagem) {
      return null;
    }
    Object.assign(existingPostagem, postagem);
    return await this.repository.save(existingPostagem);
  }
  async findAllWithoutFilter(page, limit) {
    return await this.repository.find({
      relations: ["usuario"],
      skip: (page - 1) * limit,
      take: limit,
      order: { dataCriacao: "DESC" }
    });
  }
  async delete(id) {
    const repo = appDataSource.getRepository(Postagem);
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
  async searchByNome(termo) {
    const repo = appDataSource.getRepository(Postagem);
    return repo.createQueryBuilder("postagem").leftJoinAndSelect("postagem.usuario", "usuario").leftJoinAndSelect("usuario.tipo", "tipo").where("postagem.titulo ILIKE :termo", { termo: `%${termo}%` }).orWhere("postagem.conteudo ILIKE :termo", { termo: `%${termo}%` }).orderBy("postagem.dataCriacao", "DESC").getMany();
  }
};

// src/use-cases/create-postagem.ts
var CreatePostagemUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler(postagem) {
    return await this.postagemRepository.create(postagem);
  }
};

// src/use-cases/factory/make-create-postagem-use-case.ts
function makeCreatePostagemUseCase() {
  const postagemRepository = new PostagemRepository();
  const createPostagemUseCase = new CreatePostagemUseCase(postagemRepository);
  return createPostagemUseCase;
}

// src/http/controllers/postagem/create.ts
var import_zod2 = __toESM(require("zod"));
async function create(request, reply) {
  const registerBodySchema = import_zod2.default.object({
    titulo: import_zod2.default.string().min(1, "T\xEDtulo \xE9 obrigat\xF3rio"),
    conteudo: import_zod2.default.string().min(1, "Conte\xFAdo \xE9 obrigat\xF3rio"),
    idUsuario: import_zod2.default.string().uuid()
  });
  const { titulo, conteudo, idUsuario } = registerBodySchema.parse(request.body);
  const createPostagemUseCase = makeCreatePostagemUseCase();
  const postagem = await createPostagemUseCase.handler({
    titulo,
    conteudo,
    idUsuario
  });
  return reply.status(201).send(postagem);
}

// src/use-cases/find-by-all-posts.ts
var FindByAllPostsUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler(page, limit) {
    return await this.postagemRepository.findByAllPosts(page, limit);
  }
};

// src/use-cases/factory/make-find-by-all-posts-use-case.ts
function makeFindByAllPostsUseCase() {
  const postagemRepository = new PostagemRepository();
  const findByAllPostsUseCase = new FindByAllPostsUseCase(postagemRepository);
  return findByAllPostsUseCase;
}

// src/http/controllers/postagem/findByAllPosts.ts
var import_zod3 = __toESM(require("zod"));
async function findByAllPosts(request, reply) {
  const registerQueryShcema = import_zod3.default.object({
    page: import_zod3.default.coerce.number().default(1),
    limit: import_zod3.default.coerce.number().default(10)
  });
  const { page, limit } = registerQueryShcema.parse(request.params);
  const findByAllPosts2 = makeFindByAllPostsUseCase();
  const posts = await findByAllPosts2.handler(page, limit);
  return reply.status(200).send(posts);
}

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found");
  }
};

// src/use-cases/find-by-id.ts
var FindByIdUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler(id) {
    const post = await this.postagemRepository.findById(id);
    if (!post) throw new ResourceNotFoundError();
    return post;
  }
};

// src/use-cases/factory/make-find-by-id-use-case.ts
function makeFindByIdUseCase() {
  const postagemRepository = new PostagemRepository();
  const findByIdUseCase = new FindByIdUseCase(postagemRepository);
  return findByIdUseCase;
}

// src/http/controllers/postagem/findById.ts
var import_zod4 = __toESM(require("zod"));
async function findById(request, reply) {
  const registerBodySchema = import_zod4.default.object({
    id: import_zod4.default.string().uuid("ID inv\xE1lido")
  });
  const { id } = registerBodySchema.parse(request.params);
  const findByIdUseCase = makeFindByIdUseCase();
  const post = await findByIdUseCase.handler(id);
  return reply.status(200).send(post);
}

// src/use-cases/update-postagem.ts
var UpdatePostagemUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler(id, postagem) {
    const postagemExisting = await this.postagemRepository.update(id, postagem);
    if (!postagemExisting) throw new ResourceNotFoundError();
    return postagemExisting;
  }
};

// src/use-cases/factory/make-update-postagem-use-case.ts
function makeUpdatePostagemUseCase() {
  const postagemRepository = new PostagemRepository();
  const updatePostagemUseCase = new UpdatePostagemUseCase(postagemRepository);
  return updatePostagemUseCase;
}

// src/http/controllers/postagem/update.ts
var import_zod5 = __toESM(require("zod"));
async function update(request, reply) {
  const id = request.params;
  const registerBodySchema = import_zod5.default.object({
    titulo: import_zod5.default.string().min(1, "T\xEDtulo \xE9 obrigat\xF3rio"),
    conteudo: import_zod5.default.string().min(1, "Conte\xFAdo \xE9 obrigat\xF3rio"),
    ativo: import_zod5.default.boolean()
  });
  const registerParamsSchema = import_zod5.default.object({
    id: import_zod5.default.string().uuid("ID inv\xE1lido")
  });
  const { titulo, conteudo, ativo } = registerBodySchema.parse(request.body);
  const { id: postagemId } = registerParamsSchema.parse(request.params);
  const updatePostagemUseCase = makeUpdatePostagemUseCase();
  const updatedPostagem = await updatePostagemUseCase.handler(postagemId, { titulo, conteudo, ativo, dataAtualizacao: /* @__PURE__ */ new Date() });
  return reply.status(200).send(updatedPostagem);
}

// src/http/controllers/postagem/delete.ts
var import_zod6 = __toESM(require("zod"));

// src/use-cases/delete-postagem.ts
var DeletePostagemUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler(id) {
    const postagem = await this.postagemRepository.findById(id);
    if (!postagem) {
      return false;
    }
    return await this.postagemRepository.delete(id);
  }
};

// src/use-cases/factory/make-delete-postagem-use-case.ts
function makeDeletePostagemUseCase() {
  const postagemRepository = new PostagemRepository();
  return new DeletePostagemUseCase(postagemRepository);
}

// src/http/controllers/postagem/delete.ts
async function remove(request, reply) {
  const paramsSchema = import_zod6.default.object({
    id: import_zod6.default.string().uuid()
  });
  const { id } = paramsSchema.parse(request.params);
  const deletePostagemUseCase = makeDeletePostagemUseCase();
  const sucesso = await deletePostagemUseCase.handler(id);
  if (!sucesso) {
    return reply.status(404).send({ mensagem: "Postagem n\xE3o encontrada" });
  }
  return reply.status(204).send();
}

// src/http/controllers/postagem/search.ts
var import_zod7 = __toESM(require("zod"));

// src/use-cases/search-by-postagem.ts
var SearchPostagemUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler(termo) {
    return this.postagemRepository.searchByNome(termo);
  }
};

// src/use-cases/factory/make-search-postagem-use-case.ts
function makeSearchPostagemUseCase() {
  const postagemRepository = new PostagemRepository();
  return new SearchPostagemUseCase(postagemRepository);
}

// src/http/controllers/postagem/search.ts
async function search(request, reply) {
  const querySchema = import_zod7.default.object({
    termo: import_zod7.default.string().min(1, "Termo de busca \xE9 obrigat\xF3rio")
  });
  const { termo } = querySchema.parse(request.query);
  const searchPostagemUseCase = makeSearchPostagemUseCase();
  const resultados = await searchPostagemUseCase.handler(termo);
  return reply.send(resultados);
}

// src/http/controllers/postagem/findAllSemFiltro.ts
var import_zod8 = __toESM(require("zod"));

// src/use-cases/find-by-all-posts-sem-filtro.ts
var ListAllPostagensSemFiltroUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  async handler({ page, limit }) {
    return await this.postagemRepository.findAllWithoutFilter(page, limit);
  }
};

// src/use-cases/factory/make-list-postagens-sem-filtro-use-case.ts
function makeListPostagensSemFiltroUseCase() {
  const postagemRepository = new PostagemRepository();
  const listPostagensSemFiltroUseCase = new ListAllPostagensSemFiltroUseCase(postagemRepository);
  return listPostagensSemFiltroUseCase;
}

// src/http/controllers/postagem/findAllSemFiltro.ts
async function findAllSemFiltro(request, reply) {
  const querySchema = import_zod8.default.object({
    page: import_zod8.default.coerce.number().default(1),
    limit: import_zod8.default.coerce.number().default(10)
  });
  const { page, limit } = querySchema.parse(request.query);
  const useCase = makeListPostagensSemFiltroUseCase();
  const postagens = await useCase.handler({ page, limit });
  return reply.send(postagens);
}

// src/http/controllers/postagem/routes.ts
async function postagemRoutes(app2) {
  app2.get("/postagem", {
    schema: {
      tags: ["Postagem"],
      summary: "Listar todos posts ativos para os alunos",
      querystring: {
        type: "object",
        properties: {
          page: { type: "number", default: 1 },
          limit: { type: "number", default: 10 }
        }
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
                      id: { type: "number" }
                    }
                  }
                }
              },
              id: { type: "string", format: "uuid" },
              dataCriacao: { type: "string", format: "date-time" },
              dataAtualizacao: { type: "string", format: "date-time" },
              ativo: { type: "boolean" },
              idUsuario: { type: "string", format: "uuid" }
            },
            required: [
              "titulo",
              "conteudo",
              "usuario",
              "id",
              "dataCriacao",
              "dataAtualizacao",
              "ativo",
              "idUsuario"
            ]
          }
        }
      }
    }
  }, findByAllPosts);
  app2.get("/postagem/:id", {
    schema: {
      tags: ["Postagem"],
      summary: "Buscar uma postagem pelo ID",
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" }
        }
      },
      response: {
        200: {
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
                    id: { type: "number" }
                  }
                }
              }
            },
            id: { type: "string", format: "uuid" },
            dataCriacao: { type: "string", format: "date-time" },
            dataAtualizacao: { type: "string", format: "date-time" },
            ativo: { type: "boolean" },
            idUsuario: { type: "string", format: "uuid" }
          },
          required: [
            "titulo",
            "conteudo",
            "usuario",
            "id",
            "dataCriacao",
            "dataAtualizacao",
            "ativo",
            "idUsuario"
          ]
        },
        404: {
          type: "object",
          properties: {
            message: { type: "string" }
          },
          example: {
            message: "Postagem n\xE3o encontrada"
          }
        }
      }
    }
  }, findById);
  app2.post("/postagem", {
    schema: {
      tags: ["Postagem"],
      summary: "Criar uma nova postagem",
      body: {
        type: "object",
        required: ["titulo", "conteudo", "idUsuario"],
        properties: {
          titulo: { type: "string" },
          conteudo: { type: "string" },
          idUsuario: { type: "string", format: "uuid" }
        }
      },
      response: {
        201: {
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
                    id: { type: "number" }
                  }
                }
              }
            },
            id: { type: "string", format: "uuid" },
            dataCriacao: { type: "string", format: "date-time" },
            dataAtualizacao: { type: "string", format: "date-time" },
            ativo: { type: "boolean" },
            idUsuario: { type: "string", format: "uuid" }
          },
          required: [
            "titulo",
            "conteudo",
            "idUsuario"
          ]
        }
      }
    }
  }, create);
  app2.put("/postagem/:id", {
    schema: {
      tags: ["Postagem"],
      summary: "Atualizar uma postagem existente",
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" }
        }
      },
      body: {
        type: "object",
        properties: {
          titulo: { type: "string" },
          conteudo: { type: "string" },
          ativo: { type: "boolean" }
        },
        required: ["titulo", "conteudo"]
      },
      response: {
        200: {
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
                    id: { type: "number" }
                  }
                }
              }
            },
            id: { type: "string", format: "uuid" },
            dataCriacao: { type: "string", format: "date-time" },
            dataAtualizacao: { type: "string", format: "date-time" },
            ativo: { type: "boolean" },
            idUsuario: { type: "string", format: "uuid" }
          }
        },
        404: {
          type: "object",
          properties: {
            message: { type: "string" }
          },
          example: { message: "Postagem n\xE3o encontrada" }
        }
      }
    }
  }, update);
  app2.delete("/postagem/:id", {
    schema: {
      tags: ["Postagem"],
      summary: "Deletar uma postagem pelo ID",
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "string", format: "uuid" }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" }
          },
          example: { message: "Postagem deletada com sucesso" }
        },
        404: {
          type: "object",
          properties: {
            message: { type: "string" }
          },
          example: { message: "Postagem n\xE3o encontrada" }
        }
      }
    }
  }, remove);
  app2.get("/postagem/search", {
    schema: {
      tags: ["Postagem"],
      summary: "Buscar postagens por termo no t\xEDtulo ou conte\xFAdo",
      querystring: {
        type: "object",
        required: ["termo"],
        properties: {
          termo: { type: "string" }
        }
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
                      id: { type: "number" }
                    }
                  }
                }
              },
              id: { type: "string", format: "uuid" },
              dataCriacao: { type: "string", format: "date-time" },
              dataAtualizacao: { type: "string", format: "date-time" },
              ativo: { type: "boolean" },
              idUsuario: { type: "string", format: "uuid" }
            },
            required: [
              "titulo",
              "conteudo",
              "usuario",
              "id",
              "dataCriacao",
              "dataAtualizacao",
              "ativo",
              "idUsuario"
            ]
          }
        }
      }
    }
  }, search);
  app2.get("/postagem/sem-filtro", {
    schema: {
      tags: ["Postagem"],
      summary: "Listar todas as postagens sem filtro (para professores)",
      querystring: {
        type: "object",
        properties: {
          page: { type: "number", default: 1 },
          limit: { type: "number", default: 10 }
        }
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
                      id: { type: "number" }
                    }
                  }
                }
              },
              id: { type: "string", format: "uuid" },
              dataCriacao: { type: "string", format: "date-time" },
              dataAtualizacao: { type: "string", format: "date-time" },
              ativo: { type: "boolean" },
              idUsuario: { type: "string", format: "uuid" }
            },
            required: ["titulo", "conteudo", "usuario", "id", "dataCriacao", "dataAtualizacao", "ativo", "idUsuario"]
          }
        }
      }
    }
  }, findAllSemFiltro);
}

// src/utils/global-error-handler.ts
var import_zod9 = require("zod");
var errorHandlerMap = {
  ZodError: (error, request, reply) => {
    return reply.status(400).send({ message: "Validation error", ...error instanceof import_zod9.ZodError && { error: error.message } });
  },
  ResourceNotFoundError: (error, request, reply) => {
    return reply.status(404).send({ message: error.message });
  }
};
var globalErrorHandler = (error, _, reply) => {
  if (env.ENV === "development") {
    console.error(error);
  }
  const handler = errorHandlerMap[error.constructor.name];
  if (handler) return handler(error, _, reply);
  return reply.status(500).send({ message: "Internal Server Error" });
};

// src/app.ts
var import_swagger = __toESM(require("@fastify/swagger"));
var import_swagger_ui = __toESM(require("@fastify/swagger-ui"));

// src/repositories/typeorm/usuario.repository.ts
var UsuarioRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Usuario);
  }
  async create(usuario) {
    usuario.nome = usuario.nome.toUpperCase();
    return await this.repository.save(usuario);
  }
  async login(email, senha) {
    const user = await this.repository.findOne({ where: { email, senha } });
    if (user)
      return { idUsuario: user?.id, idTipo: user?.tipo.id };
    return null;
  }
};

// src/use-cases/create-usuario.ts
var CreateUsuarioUseCase = class {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }
  async handler(usuario) {
    return await this.usuarioRepository.create(usuario);
  }
};

// src/use-cases/factory/make-create-usuario.use-case.ts
function makeCreateUsuarioUseCase() {
  const usuarioRepository = new UsuarioRepository();
  const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository);
  return createUsuarioUseCase;
}

// src/http/controllers/usuario/create.ts
var import_zod10 = __toESM(require("zod"));
async function create2(request, reply) {
  const registerBodySchema = import_zod10.default.object({
    nome: import_zod10.default.string().min(1, "Nome \xE9 obrigat\xF3rio"),
    email: import_zod10.default.string().email("Email inv\xE1lido"),
    senha: import_zod10.default.string().min(6, "Senha deve ter no m\xEDnimo 6 caracteres"),
    idTipo: import_zod10.default.number()
  });
  const { nome, email, senha, idTipo } = registerBodySchema.parse(request.body);
  const createUsuarioUseCase = makeCreateUsuarioUseCase();
  const usuario = await createUsuarioUseCase.handler({
    nome,
    email,
    senha,
    idTipo
  });
  return reply.status(201).send(usuario);
}

// src/use-cases/login-usuario.ts
var LoginUsuarioUseCase = class {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }
  async handler(email, senha) {
    return await this.usuarioRepository.login(email, senha);
  }
};

// src/use-cases/factory/make-login-usuario-use-case.ts
function makeLoginUsuarioUseCase() {
  const usuarioRepository = new UsuarioRepository();
  const loginUsuarioUseCase = new LoginUsuarioUseCase(usuarioRepository);
  return loginUsuarioUseCase;
}

// src/http/controllers/usuario/login.ts
var import_zod11 = __toESM(require("zod"));
async function login(request, reply) {
  const registerBodySchema = import_zod11.default.object({
    email: import_zod11.default.string().email("Email inv\xE1lido"),
    senha: import_zod11.default.string().min(6, "Senha deve ter no m\xEDnimo 6 caracteres")
  });
  const { email, senha } = registerBodySchema.parse(request.body);
  const loginUsuarioUseCase = makeLoginUsuarioUseCase();
  const token = await loginUsuarioUseCase.handler(email, senha);
  if (!token) {
    return reply.status(401).send({ message: "Credenciais inv\xE1lidas" });
  }
  return reply.status(200).send({ token });
}

// src/http/controllers/usuario/routes.ts
async function usuarioRoutes(app2) {
  app2.post("/usuario", {
    schema: {
      tags: ["Usuario"],
      summary: "Criar um novo usuario",
      body: {
        type: "object",
        required: ["nome", "email", "senha", "idTipo"],
        properties: {
          nome: { type: "string" },
          email: { type: "string", format: "email" },
          senha: { type: "string", minLength: 6 },
          idTipo: { type: "number" }
        }
      },
      response: {
        201: {
          type: "object",
          properties: {
            id: { type: "string" },
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            idTipo: { type: "number" }
          },
          required: [
            "id",
            "nome",
            "email",
            "idTipo"
          ]
        }
      }
    }
  }, create2);
  app2.post("/login", {
    schema: {
      tags: ["Usuario"],
      summary: "Login do usuario",
      body: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          email: { type: "string", format: "email" },
          senha: { type: "string", minLength: 6 }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            token: {
              type: "object",
              properties: {
                idUsuario: { type: "string" },
                idTipo: { type: "number" }
              },
              required: ["idUsuario", "idTipo"]
            }
          },
          required: ["token"]
        },
        401: {
          type: "object",
          properties: {
            message: { type: "string" }
          },
          required: ["message"]
        }
      }
    }
  }, login);
}

// src/app.ts
var app = (0, import_fastify.default)();
app.register(import_swagger.default, {
  swagger: {
    info: {
      title: "Blog de Estudos",
      description: "API para cria\xE7\xE3o de um blog de estudos",
      version: "1.0.0"
    },
    tags: [
      {
        name: "Postagem",
        description: "Gerenciamento de postagens"
      },
      {
        name: "Usuario",
        description: "Gerenciamento de usuarios"
      }
    ]
  }
});
app.register(import_swagger_ui.default, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false
  }
});
app.register(postagemRoutes);
app.register(usuarioRoutes);
app.setErrorHandler(globalErrorHandler);

// src/server.ts
var port = Number(process.env.PORT) || 3e3;
app.listen({ host: "0.0.0.0", port }).then(() => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}).catch((err) => {
  console.error("Erro ao iniciar servidor:", err);
});
