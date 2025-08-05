import request from "supertest";
import { app } from "@/app";
import { appDataSource } from "@/lib/typeorm/typeorm";

beforeAll(async () => {
  await appDataSource.initialize();
  await app.ready();
});

afterAll(async () => {
  await appDataSource.destroy();
  await app.close();
});
describe("PUT /postagem/:id", () => {
  it("deve atualizar uma postagem existente", async () => {
    const postagemCriada = await request(app.server).post("/postagem").send({
      titulo: "Original",
      conteudo: "Original",
      idUsuario: "f8e5b236-06da-4d17-91e8-125510e8d91c"
    });

    const atualizacao = {
      titulo: "Atualizado",
      conteudo: "Novo conteúdo",
      idUsuario: "f8e5b236-06da-4d17-91e8-125510e8d91c",
      ativo: false
    };

    const res = await request(app.server)
      .put(`/postagem/${postagemCriada.body.id}`)
      .send(atualizacao);

    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe(atualizacao.titulo);
    expect(res.body.conteudo).toBe(atualizacao.conteudo);
  });
});
