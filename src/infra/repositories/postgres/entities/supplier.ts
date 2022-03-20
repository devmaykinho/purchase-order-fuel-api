import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'supplier' })
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  cnpj: string

  @Column()
  email: string

  @Column({ name: 'phone_number' })
  phoneNumber: string

  @Column()
  address: string

  @Column()
  city: string

  @Column()
  uf: string

  @Column()
  cep: string

  @Column({ name: 'is_active' })
  isActive: string

  @Column()
  observation: string
}
