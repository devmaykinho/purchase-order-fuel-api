import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'fuel_station' })
export class FuelStationEntity {
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

  @Column({ name: 'fuel_station_number' })
  fuelStationNumber: string

  @Column()
  cep: string

  @Column()
  flag: string

  @Column({ name: 'is_network' })
  isNetwork: string

  @Column({ name: 'network_name' })
  networkName?: string

  @Column()
  status: string

  @Column()
  password: string
}
