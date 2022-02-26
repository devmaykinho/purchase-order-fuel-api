import { Validation } from '../interface'
import { HasNetworkValidation } from './has-network.validation'
import { newFuelStation } from '../../utils/fixtures'
import { MissingParamError } from '../../utils/error'

describe('HasNotworkValidation -Unit test', () => {
  let hasNetworkValidation: Validation

  beforeAll(() => {
    hasNetworkValidation = new HasNetworkValidation()
  })
  it('Should return undefined if network is valid', () => {
    const fuelStation = newFuelStation()
    const result = hasNetworkValidation.validate(fuelStation)
    expect(result).toBeFalsy()
  })

  it('Should return MissingParamError if network is not provided and the fuel station is a network', () => {
    const fuelStation = newFuelStation({ networkName: '' })
    expect(() => hasNetworkValidation.validate(fuelStation)).toThrow(new MissingParamError('networkName'))
  })

  it('Should return undefided if network is not provided and the fuel station is not a network', () => {
    const fuelStation = newFuelStation({ networkName: '', isNetwork: 'NÃO' })
    const result = hasNetworkValidation.validate(fuelStation)
    expect(result).toBeFalsy()
  })
})
