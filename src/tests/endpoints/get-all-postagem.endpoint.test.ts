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
describe("GET /postagem", () => {
  it("deve retornar a lista de postagens", async () => {
    const res = await request(app.server).get("/postagem");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
