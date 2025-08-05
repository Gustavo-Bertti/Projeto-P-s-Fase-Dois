import { UpdatePostagemUseCase } from "@/use-cases/update-postagem";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";
import { IPostagem } from "@/entities/model/postagem.interface";

describe("UpdatePostagemUseCase", () => {
  it("deve atualizar uma postagem existente", async () => {
    const postagemId = "123";
    const mockPostagem: IPostagem = {
      id: postagemId,
      titulo: "Atualizado",
      conteudo: "Conteúdo atualizado",
      usuario: { id: "1" },
      ativo: true
    } as IPostagem;

    const mockRepo: IPostagemRepository = {
      update: jest.fn().mockResolvedValue(mockPostagem),
    } as any;

    const useCase = new UpdatePostagemUseCase(mockRepo);
    const result = await useCase.handler(postagemId, mockPostagem);

    expect(result).toEqual(mockPostagem);
    expect(mockRepo.update).toHaveBeenCalledWith(postagemId, mockPostagem);
  });
});
