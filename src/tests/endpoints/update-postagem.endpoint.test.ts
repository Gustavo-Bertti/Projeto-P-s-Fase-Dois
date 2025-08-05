import request from "supertest";
import { app } from "@/app";

describe("PUT /postagens/:id", () => {
  it("deve atualizar uma postagem existente", async () => {
    const postagemCriada = await request(app.server).post("/postagens").send({
      titulo: "Original",
      conteudo: "Original",
      usuarioId: "1"
    });

    const atualizacao = {
      titulo: "Atualizado",
      conteudo: "Novo conteúdo",
      usuarioId: "1"
    };

    const res = await request(app.server)
      .put(`/postagens/${postagemCriada.body.id}`)
      .send(atualizacao);

    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe(atualizacao.titulo);
    expect(res.body.conteudo).toBe(atualizacao.conteudo);
  });
});
