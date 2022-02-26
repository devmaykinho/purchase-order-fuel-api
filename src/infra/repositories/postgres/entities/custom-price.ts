import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'custom_price' })
export class CustomPriceEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'fuel_type' })
  fuelType: string

  @Column({ name: 'payment_type' })
  paymentType: string

  @Column({ name: 'delivery_type' })
  deliveryType: string

  @Column()
  price: Number

  @Column({ name: 'is_active' })
  isActive: string

  @Column({ name: 'fuel_station_id' })
  fuelStationId: Number

  @Column({ name: 'create_date', type: 'date' })
  createDate: string
}
