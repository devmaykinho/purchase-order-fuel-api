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

  @Column()
  telephone: string

  @Column()
  city: string

  @Column()
  district: string

  @Column()
  street: string

  @Column({ name: 'supplier_number' })
  supplierNumber: string

  @Column()
  cep: string

  @Column({ name: 'is_active' })
  isActive: string
}
