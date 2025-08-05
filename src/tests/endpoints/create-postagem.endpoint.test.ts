import request from "supertest";
import { app } from "@/app";
import { appDataSource } from "../../lib/typeorm/typeorm";

beforeAll(async () => {
  await appDataSource.initialize(); // conecta antes de rodar os testes
  await app.ready();                // garante que o Fastify está pronto
});

afterAll(async () => {
  await appDataSource.destroy();    // fecha conexão do banco
  await app.close();                // fecha Fastify
});
describe("POST /postagem", () => {
  it("deve criar uma nova postagem", async () => {
    const novaPostagem = {
      titulo: "Postagem de teste Test",
      conteudo: "Conteúdo qualquer Test",
      idUsuario: "f8e5b236-06da-4d17-91e8-125510e8d91c"
    };

    const res = await request(app.server)
      .post("/postagem")
      .send(novaPostagem);

    expect(res.status).toBe(201);
  });
});
