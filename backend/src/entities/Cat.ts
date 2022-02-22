import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("cats") //devemos colocar o nome da tabela a qual essa entidade se refere
class Cat {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  link: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  constructor() { //criando um ID do tipo V4 para cada novo usuario
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Cat }
