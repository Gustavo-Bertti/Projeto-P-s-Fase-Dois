"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/entities/postagem.entity.ts
var postagem_entity_exports = {};
__export(postagem_entity_exports, {
  Postagem: () => Postagem
});
module.exports = __toCommonJS(postagem_entity_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Postagem
});
