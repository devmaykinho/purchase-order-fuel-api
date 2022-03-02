import moment from 'moment'
import { CustomError, MissingParamError } from '../../utils/error'
import { DeliveryType, FuelType, PaymentType } from '../interface/types'
import { FindFuelStationByIdRepository, GetConfigRepository, Validation } from '../interface'
import { PurchaseOrderModel, ShippingCompanyModel } from '../models'

export class PurcharseOrderValidation implements Validation {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly shippingCompanyValidation: Validation,
    private readonly findFuelStationRepository: FindFuelStationByIdRepository,
    private readonly getConfigRepository: GetConfigRepository
  ) {}

  validate = async (purcharseOrder: PurchaseOrderModel): Promise<void> => {
    this.requiredFieldsValidation.validate(purcharseOrder)
    this.validateShippingCompany(purcharseOrder.shippingCompany)
    this.validateFuelType(purcharseOrder.fuelType)
    this.validatePaymentType(purcharseOrder.paymentType)
    this.validateDeliveryType(purcharseOrder.deliveryType)
    this.validateDeliveryDate(purcharseOrder.deliveryDate)
    this.validateQtdLiters(purcharseOrder.qtdLiters)

    await this.validateTimeLimit()
    await this.validateFuelStationStatus(Number(purcharseOrder.fuelStationId))
  }

  validateTimeLimit = async (): Promise<void> => {
    const config = await this.getConfigRepository.run()
    const curretDate = new Date()
    const currentHour = Number(curretDate.getHours())
    const currentMinute = Number(curretDate.getMinutes())

    if (!config?.timeLimitPurchase) {
      throw new Error('Não foi possível localizar as configurações do sistema.')
    }

    const timeConfig = config?.timeLimitPurchase.split(':') ?? 0

    if (currentHour > Number(timeConfig[0]) ||
        (currentHour === Number(timeConfig[0]) && currentMinute > Number(timeConfig[1]))
    ) {
      throw new CustomError('Horario não permitido para realização do pedido.')
    }
  }

  validateFuelType = (type: FuelType): void => {
    const types: FuelType[] = ['ETANOL', 'GASOLINA']
    if (!types.includes(type)) {
      throw new CustomError('Tipo de combustivel não permitido.')
    }
  }

  validatePaymentType = (type: PaymentType): void => {
    const types: PaymentType[] = ['ANTECIPADO', 'AVISTA', '7DIAS', '10DIAS']
    if (!types.includes(type)) {
      throw new CustomError('Tipo de pagamento não permitido.')
    }
  }

  validateDeliveryType = (type: DeliveryType): void => {
    const types: DeliveryType[] = ['COLACADO', 'RETIRADA']
    if (!types.includes(type)) {
      throw new CustomError('Tipo de entrega não permitido.')
    }
  }

  validateFuelStationStatus = async (fuelStationId: number): Promise<void> => {
    const fuelStation = await this.findFuelStationRepository.run(fuelStationId)
    if (fuelStation?.status !== 'ACTIVE') {
      throw new CustomError('Cadastro pendente de aprovação.')
    }
  }

  validateDeliveryDate = (deliveryDate: string): void => {
    const curretDate = moment(new Date()).format('DD/MM/YYYY')
    if (curretDate >= deliveryDate) {
      throw new CustomError('Não é possível fazer pedido para uma data anterior ou igual a atual.')
    }
  }

  validateShippingCompany = (shippingCompany?: ShippingCompanyModel): void => {
    if (!shippingCompany) {
      throw new MissingParamError('shippingCompany')
    }

    let isEmpty = true

    Object.keys(shippingCompany).forEach((key) => {
      isEmpty = false
    })

    if (isEmpty) {
      throw new MissingParamError('shippingCompany')
    }

    this.shippingCompanyValidation.validate(shippingCompany)
  }

  validateQtdLiters = (qtdLiters: Number): void => {
    if (qtdLiters < 1) {
      throw new CustomError('Quantidade de litros dever ser maior que zero.')
    }
  }
}
