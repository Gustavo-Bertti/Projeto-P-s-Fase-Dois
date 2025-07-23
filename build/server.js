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

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3e3)
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid enviroment variables", _env.error.format());
  throw new Error("Invalid enviroment variables");
}
var env = _env.data;

// src/app.ts
var import_fastify = __toESM(require("fastify"));

// src/repositories/postagem.repository.ts
var PostagemRepository = class {
  async findById(id) {
    return {
      id,
      titulo: "Teste",
      conteudo: "Muito conteudo",
      dataAtualizacao: /* @__PURE__ */ new Date("15/07/2025"),
      dataCriacao: /* @__PURE__ */ new Date("15/07/2025"),
      usuario_id: 1
    };
  }
  async create(postagem) {
    return postagem;
  }
};

// src/use-cases/create-postagem.ts
var CreatePostagemUseCase = class {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }
  handler(postagem) {
    return this.postagemRepository.create(postagem);
  }
};

// src/http/controllers/postagem/create.ts
var import_zod2 = __toESM(require("zod"));
async function create(request, reply) {
  const registerBodySchema = import_zod2.default.object({
    titulo: import_zod2.default.string(),
    conteudo: import_zod2.default.string(),
    dataCriacao: import_zod2.default.date(),
    usuario_id: import_zod2.default.number()
  });
  const { titulo, conteudo, dataCriacao, usuario_id } = registerBodySchema.parse(request.body);
  try {
    const postagemRepository = new PostagemRepository();
    const createPostagemUseCase = new CreatePostagemUseCase(postagemRepository);
    await createPostagemUseCase.handler({ titulo, conteudo, dataCriacao, usuario_id });
    return reply.status(201);
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

// src/http/controllers/postagem/routes.ts
async function postagemRoutes(app2) {
  app2.post("/postagem", create);
}

// src/app.ts
var app = (0, import_fastify.default)();
app.register(postagemRoutes);

// src/server.ts
app.listen({
  host: "0.0.0.0",
  port: env.PORT
}).then(() => {
  console.log("Servidor est\xE1 rodando no link http://localhost:3000");
});
