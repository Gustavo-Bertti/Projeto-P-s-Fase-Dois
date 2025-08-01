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

// src/utils/global-error-handler.ts
var global_error_handler_exports = {};
__export(global_error_handler_exports, {
  errorHandlerMap: () => errorHandlerMap,
  globalErrorHandler: () => globalErrorHandler
});
module.exports = __toCommonJS(global_error_handler_exports);

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

// src/utils/global-error-handler.ts
var import_zod2 = require("zod");
var errorHandlerMap = {
  ZodError: (error, request, reply) => {
    return reply.status(400).send({ message: "Validation error", ...error instanceof import_zod2.ZodError && { error: error.message } });
  },
  ResourceNotFoundError: (error, request, reply) => {
    return reply.status(404).send({ message: error.message });
  }
};
var globalErrorHandler = (error, _, reply) => {
  if (env.NODE_ENV === "development") {
    console.error(error);
  }
  const handler = errorHandlerMap[error.constructor.name];
  if (handler) return handler(error, _, reply);
  return reply.status(500).send({ message: "Internal Server Error" });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  errorHandlerMap,
  globalErrorHandler
});
