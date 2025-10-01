import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { IUsuario } from "./model/usuario.interface"
import { Tipo } from "./tipo.entity"
import { Postagem } from "./postagem.entity"

@Entity({
  name: "usuario"
})
export class Usuario implements IUsuario {
  @PrimaryGeneratedColumn("uuid", { name: "idusuario" })
  id?: string
  @Column({
    name: "nome",
    type: "varchar",
    length: 100,
    nullable: false
  })
  nome: string

  @Column({
    name: "email",
    type: "varchar",
    length: 150,
    unique: true,
    nullable: false
  })
  email: string

  @Column({
    name: "senha",
    type: "varchar",
    length: 255,
    nullable: false
  })
  senha: string

  @ManyToOne(() => Tipo, tipo => tipo.usuarios, {
    nullable: false,
    eager: true,
    onDelete: "CASCADE"
  })
  @JoinColumn({ name: "idtipo" })
  idTipo: number;


  @OneToMany(() => Postagem, postagem => postagem.idUsuario)
  postagens: Postagem[];

  constructor(nome: string, email: string, tipo: Tipo) {
    this.nome = nome
    this.email = email
  }
}
