import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Usuario } from "./usuario.entity";

@Entity({
  name: "tipo"
})
export class Tipo {
  @PrimaryGeneratedColumn("increment", { name: "idtipo" })
  id?: number

  @Column({
    name: "nome",
    type: "varchar",
    length: 100,
    nullable: false
  })
  nome: string

  @OneToMany(() => Usuario, usuario => usuario.idTipo)
  usuarios: Usuario[];

  constructor(nome: string) {
    this.nome = nome
  }
}
