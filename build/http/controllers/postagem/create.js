"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/http/controllers/postagem/create.ts
var create_exports = {};
__export(create_exports, {
  create: () => create
});
module.exports = __toCommonJS(create_exports);

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
  }
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid", { name: "idusuario" })
], Usuario.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    name: "nome",
    type: "varchar",
    length: 100,
    nullable: false
  })
], Usuario.prototype, "nome", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    name: "email",
    type: "varchar",
    length: 150,
    unique: true,
    nullable: false
  })
], Usuario.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)(() => Tipo, (tipo) => tipo.usuarios, {
    nullable: false,
    eager: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm2.JoinColumn)({ name: "idtipo" })
], Usuario.prototype, "idTipo", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)(() => Postagem, (postagem) => postagem.idUsuario)
], Usuario.prototype, "postagens", 2);
Usuario = __decorateClass([
  (0, import_typeorm2.Entity)({
    name: "usuario"
  })
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
    default: () => "CURRENT_TIMESTAMP",
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

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm4.DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: [Postagem, Usuario, Tipo],
  logging: env.ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log("Data Base with TypeORM connected successfully");
}).catch((error) => {
  console.error("Error connecting to the Data Base with TypeORM:", error);
});

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  create
});
