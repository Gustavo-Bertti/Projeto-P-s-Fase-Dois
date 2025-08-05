import { CreatePostagemUseCase } from "@/use-cases/create-postagem";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";
import { IPostagem } from "@/entities/model/postagem.interface";

const mockPostagem: IPostagem = {
  titulo: "Nova postagem",
  conteudo: "Conteúdo da nova postagem",
  usuario: { id: "1" },
  ativo: true
} as IPostagem;

describe("CreatePostagemUseCase", () => {
  it("deve criar uma nova postagem", async () => {
    const mockRepo: IPostagemRepository = {
      create: jest.fn().mockResolvedValue(mockPostagem),
    } as any;

    const useCase = new CreatePostagemUseCase(mockRepo);
    const result = await useCase.handler(mockPostagem);

    expect(result).toEqual(mockPostagem);
    expect(mockRepo.create).toHaveBeenCalledWith(mockPostagem);
  });
});
