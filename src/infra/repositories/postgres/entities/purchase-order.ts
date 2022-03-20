import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'purchase_order' })
export class PurchaseOrderEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'fuel_type' })
  fuelType: string

  @Column({ name: 'payment_type' })
  paymentType: string

  @Column({ name: 'delivery_type' })
  deliveryType: string

  @Column({ name: 'qtd_liters' })
  qtdLiters: Number

  @Column({ name: 'total_price' })
  totalPrice: Number

  @Column()
  status: string

  @Column({ name: 'fuel_station_id' })
  fuelStationId: Number

  @Column({ name: 'delivery_date', type: 'date' })
  deliveryDate: string

  @Column({ name: 'shipping_name' })
  shippingName?: string

  @Column({ name: 'shipping_cnpj' })
  shippingCnpj?: string

  @Column({ name: 'shipping_plate_number' })
  shippingPlateNumber?: string

  @Column({ name: 'shipping_driver_name' })
  shippingDriverName?: string

  @Column({ name: 'shipping_driver_cnh' })
  shippingDriverCnh?: string

  @Column({ name: 'create_date', type: 'date' })
  createDate: string
}
