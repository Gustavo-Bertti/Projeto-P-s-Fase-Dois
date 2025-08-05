import request from "supertest";
import { app } from "@/app";

describe("GET /postagens", () => {
  it("deve retornar a lista de postagens", async () => {
    const res = await request(app.server).get("/postagens");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
