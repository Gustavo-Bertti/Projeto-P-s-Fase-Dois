import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IPostagem } from "./model/postagem.interface"

@Entity({
  name: "Postagem"
})
export class Postagem implements IPostagem {
  @PrimaryGeneratedColumn("uuid", { name: "IdPostagem" })
  id?: string
  
  @Column({
    name: "Titulo",
    type: "varchar",
    length: 255,
    nullable: false
  })
  titulo: string

  @Column({
    name: "Conteudo",
    type: "text",
    nullable: false
  })
  conteudo: string

  @Column({
    name: "DataCriacao",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false
  })
  dataCriacao: Date

  @Column({
    name: "DataAtualizacao",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: true
  })  
  dataAtualizacao?: Date

  @Column({
    name: "UsuarioId",
    type: "uuid",
    nullable: true
  })
  usuario_id?: string

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
