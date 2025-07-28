export interface IPostagem {
  id?: string
  titulo: string
  conteudo: string
  dataCriacao: Date
  dataAtualizacao?: Date
  usuario_id?: string
}