import moment from 'moment'

import { DeliveryType, PaymentType, FuelType } from '../../domain/models'
import { CustomPriceResponse } from '../../domain/response'

interface CustomPriceFixtureProps {
  id: number
  fuelType?: FuelType
  paymentType?: PaymentType
  deliveryType?: DeliveryType
  price?: Number
  isActive?: 'SIM' | 'NÃO'
  fuelStationId?: Number
  createDate?: string
}

export const newCustomPriceResponse = (props?: CustomPriceFixtureProps): CustomPriceResponse => ({
  id: props?.id ?? 1,
  fuelType: props?.fuelType ?? 'GASOLINA',
  paymentType: props?.paymentType ?? 'ANTECIPADO',
  deliveryType: props?.deliveryType ?? 'RETIRADA',
  price: props?.price ?? 20.00,
  isActive: props?.isActive ?? 'SIM',
  fuelStationId: props?.fuelStationId ?? 1,
  createDate: props?.createDate ?? moment(new Date()).format('YYYY-MM-DD')
})
