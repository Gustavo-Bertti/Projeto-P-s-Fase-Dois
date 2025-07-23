import { Postagem } from '@/entities/postagem.entity'
import { PostagemRepository } from '@/repositories/postagem.repository'

export class CreatePostagemUseCase {
  constructor(private postagemRepository: PostagemRepository) {}

  handler(postagem: Postagem) {
    return this.postagemRepository.create(postagem)
  }
}
