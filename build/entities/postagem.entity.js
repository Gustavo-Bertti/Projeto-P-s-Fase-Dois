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

// src/entities/postagem.entity.ts
var postagem_entity_exports = {};
__export(postagem_entity_exports, {
  Postagem: () => Postagem
});
module.exports = __toCommonJS(postagem_entity_exports);
var Postagem = class {
  constructor(titulo, conteudo, dataCriacao, dataAtualizacao) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Postagem
});
