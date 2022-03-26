import moment from 'moment'
import { CustomPriceModel, DeliveryType, PaymentType, FuelType } from '../../domain/models'

interface CustomPriceFixtureProps {
  fuelType?: FuelType
  paymentType?: PaymentType
  deliveryType?: DeliveryType
  price?: number
  isActive?: 'SIM' | 'NÃO'
  fuelStationId?: number
  createDate?: string
}

export const newCustomPrice = (props?: CustomPriceFixtureProps): CustomPriceModel => ({
  fuelType: props?.fuelType ?? 'GASOLINA',
  paymentType: props?.paymentType ?? 'ANTECIPADO',
  deliveryType: props?.deliveryType ?? 'RETIRADA',
  price: props?.price ?? 20.00,
  isActive: props?.isActive ?? 'SIM',
  fuelStationId: props?.fuelStationId ?? 1,
  createDate: props?.createDate ?? moment(new Date()).format('YYYY-MM-DD')
})
