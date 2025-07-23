import { Postagem } from '@/entities/postagem.entity'

export class PostagemRepository {
  async findById(id: number): Promise<Postagem> {
    return {
      id,
      titulo: 'Teste',
      conteudo: 'Muito conteudo',
      dataAtualizacao: new Date('15/07/2025'),
      dataCriacao: new Date('15/07/2025'),
      usuario_id: 1,
    }
  }

  async create(postagem: Postagem): Promise<Postagem> {
    return postagem
  }
}
