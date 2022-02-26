import { supplierPricesMapper } from './supplier-prices.mapper'
import { newSupplierPrices } from '../../../../utils/fixtures'

const supplierPricesResponse = newSupplierPrices()

describe('SupplierPricesMapper - Unit test', () => {
  it('should return undefined if entity is not provided', () => {
    expect(supplierPricesMapper(undefined)).toBe(undefined)
  })

  it('Should return a fuel station response', () => {
    const supplierPricesMapped = supplierPricesMapper({ id: 1, ...supplierPricesResponse })
    expect(supplierPricesMapped).toEqual({ id: 1, ...supplierPricesResponse })
  })
})
