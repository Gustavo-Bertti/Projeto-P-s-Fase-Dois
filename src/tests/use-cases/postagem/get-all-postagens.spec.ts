import { FindByAllPostsUseCase } from "@/use-cases/find-by-all-posts";
import { IPostagemRepository } from "@/repositories/postagem.repository.interface";
import { IPostagem } from "@/entities/model/postagem.interface";

describe("GetAllPostagensUseCase", () => {
  it("deve retornar uma lista de postagens", async () => {
    const postagens: IPostagem[] = [
      { titulo: "Postagem 1", conteudo: "Conteúdo 1", usuario: { id: "1" }, ativo: true } as IPostagem,
      { titulo: "Postagem 2", conteudo: "Conteúdo 2", usuario: { id: "1" }, ativo: true } as IPostagem
    ];

    const mockRepo: IPostagemRepository = {
      findAllWithoutFilter: jest.fn().mockResolvedValue(postagens),
    } as any;

    const useCase = new FindByAllPostsUseCase(mockRepo);
    const result = await useCase.handler(1, 10);

    expect(result).toEqual(postagens);
    expect(mockRepo.findAllWithoutFilter).toHaveBeenCalledWith(1, 10);
  });
});
