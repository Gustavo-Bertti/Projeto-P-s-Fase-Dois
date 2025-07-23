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

// src/http/controllers/postagem/routes.ts
var routes_exports = {};
__export(routes_exports, {
  postagemRoutes: () => postagemRoutes
});
module.exports = __toCommonJS(routes_exports);

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
var import_zod = __toESM(require("zod"));
async function create(request, reply) {
  const registerBodySchema = import_zod.default.object({
    titulo: import_zod.default.string(),
    conteudo: import_zod.default.string(),
    dataCriacao: import_zod.default.date(),
    usuario_id: import_zod.default.number()
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
async function postagemRoutes(app) {
  app.post("/postagem", create);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  postagemRoutes
});
