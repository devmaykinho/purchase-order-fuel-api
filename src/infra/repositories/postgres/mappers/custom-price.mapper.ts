import { CustomPriceResponse } from '../../../../domain/response'
import { CustomPriceEntity } from '../entities'

export const customPricesMapper = (customPriceEntity: CustomPriceEntity | undefined): CustomPriceResponse | undefined => {
  if (!customPriceEntity) {
    return undefined
  }

  return {
    fuelType: customPriceEntity.fuelType,
    paymentType: customPriceEntity.paymentType,
    deliveryType: customPriceEntity.deliveryType,
    price: customPriceEntity.price,
    isActive: customPriceEntity.isActive,
    createDate: customPriceEntity.createDate,
    fuelStationId: customPriceEntity.fuelStationId
  }
}
