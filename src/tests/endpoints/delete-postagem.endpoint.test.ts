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
describe("DELETE /postagem/:id", () => {
  it("deve excluir uma postagem", async () => {
    const postagemCriada = await request(app.server).post("/postagem").send({
      titulo: "Para deletar",
      conteudo: "Vai ser excluída",
      idUsuario: "f8e5b236-06da-4d17-91e8-125510e8d91c"
    });

    const res = await request(app.server).delete(`/postagem/${postagemCriada.body.id}`);

    expect(res.status).toBe(204);
  });
});
