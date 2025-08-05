import request from "supertest";
import { app } from "@/app";

describe("DELETE /postagens/:id", () => {
  it("deve excluir uma postagem", async () => {
    const postagemCriada = await request(app.server).post("/postagens").send({
      titulo: "Para deletar",
      conteudo: "Vai ser excluída",
      usuarioId: "1"
    });

    const res = await request(app.server).delete(`/postagens/${postagemCriada.body.id}`);

    expect(res.status).toBe(204);
  });
});
