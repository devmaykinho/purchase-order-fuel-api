import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'config' })
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'time_limit_purchase' })
  timeLimitPurchase: string

  @Column({ name: 'block_orders' })
  blockOrders: string
}
