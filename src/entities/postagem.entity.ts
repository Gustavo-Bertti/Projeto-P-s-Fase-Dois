export class Postagem {
  id?: number
  titulo: string
  conteudo: string
  dataCriacao: Date
  dataAtualizacao?: Date
  usuario_id?: number

  constructor(
    titulo: string,
    conteudo: string,
    dataCriacao: Date,
    dataAtualizacao: Date,
  ) {
    this.titulo = titulo
    this.conteudo = conteudo
    this.dataCriacao = dataCriacao
    this.dataAtualizacao = dataAtualizacao
  }
}
