import request from "supertest";
import { app } from "@/app";

describe("POST /postagens", () => {
  it("deve criar uma nova postagem", async () => {
    const novaPostagem = {
      titulo: "Postagem de teste",
      conteudo: "Conteúdo qualquer",
      usuarioId: "1"
    };

    const res = await request(app.server)
      .post("/postagens")
      .send(novaPostagem);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.titulo).toBe(novaPostagem.titulo);
    expect(res.body.conteudo).toBe(novaPostagem.conteudo);
  });
});
