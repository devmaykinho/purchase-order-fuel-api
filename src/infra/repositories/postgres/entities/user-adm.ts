import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'user_adm' })
export class UserAdmEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column({ name: 'phone_number' })
  phoneNumber: string

  @Column({ name: 'is_active' })
  isActive: string

  @Column()
  password: string
}
