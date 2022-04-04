import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { PurchaseOrderStatus } from '../../../../domain/interface/types'
import { DeliveryType, FuelType, PaymentType } from '../../../../domain/models'

@Entity({ name: 'purchase_order' })
export class PurchaseOrderEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'fuel_type' })
  fuelType: FuelType

  @Column({ name: 'payment_type' })
  paymentType: PaymentType

  @Column({ name: 'delivery_type' })
  deliveryType: DeliveryType

  @Column({ name: 'qtd_liters' })
  qtdLiters: number

  @Column({ name: 'total_price' })
  totalPrice: number

  @Column()
  status: PurchaseOrderStatus

  @Column({ name: 'fuel_station_id' })
  fuelStationId: number

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
