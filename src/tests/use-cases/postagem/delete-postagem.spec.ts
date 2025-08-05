import { DeletePostagemUseCase } from "@/use-cases/delete-postagem";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";

describe("DeletePostagemUseCase", () => {
  it("deve deletar uma postagem", async () => {
    const postagemId = "123";

    const mockRepo: IPostagemRepository = {
      delete: jest.fn().mockResolvedValue(true),
    } as any;

    const useCase = new DeletePostagemUseCase(mockRepo);
    const result = await useCase.handler(postagemId);

    expect(result).toBe(true);
    expect(mockRepo.delete).toHaveBeenCalledWith(postagemId);
  });
});
