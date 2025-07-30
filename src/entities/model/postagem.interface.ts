export interface IPostagem {
  id?: string
  titulo: string
  conteudo: string
  dataCriacao?: Date
  dataAtualizacao?: Date
  ativo?: boolean
  idUsuario?: string
}