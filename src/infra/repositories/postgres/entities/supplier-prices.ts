import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'supplier_prices' })
export class SupplierPricesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'fuel_type' })
  fuelType: string

  @Column({ name: 'payment_type' })
  paymentType: string

  @Column({ name: 'delivery_type' })
  deliveryType: string

  @Column({ name: 'purchase_price' })
  purchasePrice: Number

  @Column({ name: 'sales_price' })
  salesPrice: Number

  @Column({ name: 'supplier_id' })
  supplierId: Number
}
