import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('produtos')
export class Produtos {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  code: number

  @Column()
  price: number

  @Column()
  name: string

  @Column()
  quantidade: number

  @Column()
  quantidademinima: number
}
