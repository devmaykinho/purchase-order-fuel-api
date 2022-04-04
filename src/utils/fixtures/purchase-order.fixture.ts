import moment from 'moment'
import { PurchaseOrderStatus } from '../../domain/interface/types'
import { PurchaseOrderModel, DeliveryType, PaymentType, FuelType, ShippingCompanyModel } from '../../domain/models'

interface PurchaseOrderFixtureProps {
  fuelType?: FuelType
  paymentType?: PaymentType
  deliveryType?: DeliveryType
  totalPrice?: number
  qtdLiters?: number
  status?: PurchaseOrderStatus
  fuelStationId?: number
  deliveryDate?: string
  createDate?: string
  shippingCompany?: ShippingCompanyModel
}

const shippingCompany: ShippingCompanyModel = {
  shippingName: 'Compania',
  shippingDriverCnh: '01',
  shippingCnpj: '01',
  shippingDriverName: 'Teste Name',
  shippingPlateNumber: 'CCC1234'
}

export const newPurchaseOrder = (props?: PurchaseOrderFixtureProps): PurchaseOrderModel => ({
  fuelType: props?.fuelType ?? 'GASOLINA',
  paymentType: props?.paymentType ?? 'ANTECIPADO',
  deliveryType: props?.deliveryType ?? 'RETIRADA',
  totalPrice: props?.totalPrice ?? 20.00,
  qtdLiters: props?.qtdLiters ?? 10,
  status: props?.status ?? 'PENDENTE',
  fuelStationId: props?.fuelStationId ?? 1,
  deliveryDate: props?.deliveryDate ?? '01/01/2022',
  createDate: props?.createDate ?? moment(new Date()).format('YYYY-MM-DD'),
  shippingCompany: props?.shippingCompany ?? shippingCompany
})
