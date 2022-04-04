import { ShippingCompanyModel } from '../../../../domain/models'
import { PurchaseOrderResponse } from '../../../../domain/response'
import { PurchaseOrderEntity } from '../entities'

export const purchaseOrderMapper = (purchaseOrders: PurchaseOrderEntity[]): PurchaseOrderResponse[] | undefined => {
  const purchaseOrderMapped: PurchaseOrderResponse[] = purchaseOrders.map((purchaseOrder: PurchaseOrderEntity) => {
    const shippingCompany: ShippingCompanyModel = {
      shippingCnpj: purchaseOrder.shippingDriverCnh,
      shippingDriverName: purchaseOrder.shippingDriverName,
      shippingDriverCnh: purchaseOrder.shippingDriverCnh,
      shippingName: purchaseOrder.shippingName,
      shippingPlateNumber: purchaseOrder.shippingPlateNumber
    }

    const purchaseOrderFull: PurchaseOrderResponse = {
      id: purchaseOrder.id,
      fuelType: purchaseOrder.fuelType,
      paymentType: purchaseOrder.paymentType,
      deliveryType: purchaseOrder.deliveryType,
      totalPrice: purchaseOrder.totalPrice,
      status: purchaseOrder.status,
      qtdLiters: purchaseOrder.qtdLiters,
      deliveryDate: purchaseOrder.deliveryDate,
      createDate: purchaseOrder.createDate,
      fuelStationId: purchaseOrder.fuelStationId,
      shippingCompany
    }

    return purchaseOrderFull
  })
  return purchaseOrderMapped
}
