import { MockProxy, mock } from 'jest-mock-extended'
import { CreatePurchaseOrderRepository, CreatePurchaseOrder, PurcharseOrderValidations } from '../interface'
import { CreatePurchaseOrderUseCase } from './create-purchase-order.usecase'
import { newPurchaseOrder } from '../../utils/fixtures'

const purchaseOrder = newPurchaseOrder()
describe('CreatePurchaseOrderUseCase - Unit test', () => {
  let purchaseOrderValidation: MockProxy<PurcharseOrderValidations>
  let createPurchaseOrderRepository: MockProxy<CreatePurchaseOrderRepository>
  let createPurchaseOrderUseCase: CreatePurchaseOrder

  beforeAll(() => {
    purchaseOrderValidation = mock()
    createPurchaseOrderRepository = mock()
    createPurchaseOrderUseCase = new CreatePurchaseOrderUseCase(
      purchaseOrderValidation,
      createPurchaseOrderRepository
    )
  })
  it('Should call all dependencies with correct value', async () => {
    await createPurchaseOrderUseCase.run(purchaseOrder)
    expect(purchaseOrderValidation.validate).toHaveBeenCalledWith(purchaseOrder)
    expect(createPurchaseOrderRepository.run).toHaveBeenCalledWith(purchaseOrder)
  })
})
