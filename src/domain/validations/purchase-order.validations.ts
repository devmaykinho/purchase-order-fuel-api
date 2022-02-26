import moment from 'moment'
import { CustomError, MissingParamError } from '../../utils/error'
import { DeliveryType, FuelType, PaymentType } from '../interface/types'
import { FindFuelStationByEmailRepository, Validation } from '../interface'
import { PurchaseOrderModel, ShippingCompanyModel } from '../models'

export class PurcharseOrderValidation implements Validation {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly shippingCompanyValidation: Validation,
    private readonly findFuelStationRepository: FindFuelStationByEmailRepository
  ) {}

  validate = async (purcharseOrder: PurchaseOrderModel): Promise<void> => {
    this.requiredFieldsValidation.validate(purcharseOrder)
    this.validateShippingCompany(purcharseOrder.shippingCompany)
    this.validateTimeLimit()
    this.validateFuelType(purcharseOrder.fuelType)
    this.validatePaymentType(purcharseOrder.paymentType)
    this.validateDeliveryType(purcharseOrder.deliveryType)
    this.validateDeliveryDate(purcharseOrder.deliveryDate)

    await this.validateFuelStationStatus(purcharseOrder.fuelStationId.toString())
  }

  validateTimeLimit = (): void => {
    const curretDate = Number(new Date().getHours())
    if (curretDate > 16) {
      throw new CustomError('Horario não permitido para realização do pedido')
    }
  }

  validateFuelType = (type: FuelType): void => {
    const types: FuelType[] = ['ETANOL', 'GASOLINA']
    if (!types.includes(type)) {
      throw new CustomError('Tipo de combustivel não permitido')
    }
  }

  validatePaymentType = (type: PaymentType): void => {
    const types: PaymentType[] = ['ANTECIPADO', 'AVISTA', '7DIAS', '10DIAS']
    if (!types.includes(type)) {
      throw new CustomError('Tipo de pagamento não permitido')
    }
  }

  validateDeliveryType = (type: DeliveryType): void => {
    const types: DeliveryType[] = ['COLACADO', 'RETIRADA']
    if (!types.includes(type)) {
      throw new CustomError('Tipo de entrega não permitido')
    }
  }

  validateFuelStationStatus = async (fuelStationId: string): Promise<void> => {
    const fuelStation = await this.findFuelStationRepository.run(fuelStationId)
    if (fuelStation?.status !== 'ACTIVE') {
      throw new CustomError('Usuário pendente de aprovação')
    }
  }

  validateDeliveryDate = (deliveryDate: string): void => {
    const curretDate = moment(new Date()).format('DD/MM/YYYY')
    if (curretDate <= deliveryDate) {
      throw new CustomError('Não é possível fazer pedido para o mesmo dia')
    }
  }

  validateShippingCompany = (shippingCompany?: ShippingCompanyModel): void => {
    if (!shippingCompany) {
      throw new MissingParamError('shippingCompany')
    }
    this.shippingCompanyValidation.validate(shippingCompany)
  }
}