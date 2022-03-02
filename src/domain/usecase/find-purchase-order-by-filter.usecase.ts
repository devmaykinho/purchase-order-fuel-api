import { FindPurchaseOrderByFilterRepository, Validation } from '../interface'
import { FindPurchaseOrderByFilter } from '../interface/usecase/find-purchase-order-by-filter'
import { PurchaseOrderResponse } from '../response'

export class FindPurchaseOrderByFilterUseCase implements FindPurchaseOrderByFilter {
  constructor (
    private readonly requeridFieldValidation: Validation,
    private readonly findPurchaseOrderByFilterRepository: FindPurchaseOrderByFilterRepository
  ) {}

  run = async (fuelStationId: Number): Promise<PurchaseOrderResponse[]> => {
    this.requeridFieldValidation.validate(fuelStationId)
    return await this.findPurchaseOrderByFilterRepository.run(fuelStationId)
  }
}
