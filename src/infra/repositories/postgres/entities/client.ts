import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'client' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  cnpj: string

  @Column()
  address: string

  @Column({ name: 'phone_number' })
  phoneNumber: string

  @Column()
  city: string

  @Column()
  uf: string

  @Column()
  observation: string

  @Column()
  site: string
}
