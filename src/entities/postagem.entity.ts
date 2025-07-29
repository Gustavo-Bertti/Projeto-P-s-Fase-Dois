import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { IPostagem } from "./model/postagem.interface"
import { Usuario } from "./usuario.entity"

@Entity({
  name: "postagem"
})
export class Postagem implements IPostagem {
  @PrimaryGeneratedColumn("uuid", { name: "idpostagem" })
  id?: string
  
  @Column({
    name: "titulo",
    type: "varchar",
    length: 255,
    nullable: false
  })
  titulo: string

  @Column({
    name: "conteudo",
    type: "text",
    nullable: false
  })
  conteudo: string

  @Column({
    name: "datacriacao",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false
  })
  dataCriacao: Date

  @Column({
    name: "dataatualizacao",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: true
  })  
  dataAtualizacao?: Date

@ManyToOne(() => Usuario, usuario => usuario.postagens, { nullable: false, eager: true, onDelete: "CASCADE" })
@JoinColumn({ name: "idusuario" }) 
usuario: Usuario;

@Column({ name: "idusuario", type: "uuid" })
idUsuario: string;


  constructor(
  titulo: string,
  conteudo: string,
  usuario: Usuario | string,
) {
  this.titulo = titulo
  this.conteudo = conteudo
  if (typeof usuario === "string") {
    this.idUsuario = usuario
  } else {
    this.usuario = usuario
  }
}
}
