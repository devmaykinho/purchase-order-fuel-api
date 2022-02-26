import { mock, MockProxy } from 'jest-mock-extended'
import { FindFuelStationByEmailOrCnpjRepository, ValidationDuplicateRecord } from '../interface'
import { DuplicateFuelStationValidation } from './duplicate-fuel-station.validation'
import { newFuelStation } from '../../utils/fixtures'
import { FuelStationResponse } from '../response'

const fuelStation = newFuelStation()

describe('DuplicateFuelStationValidation - Unit test', () => {
  let duplicateFuelStationValidation: ValidationDuplicateRecord
  let findFuelStationByEmailOrCnpjRepository: MockProxy<FindFuelStationByEmailOrCnpjRepository>

  beforeAll(() => {
    findFuelStationByEmailOrCnpjRepository = mock()
    duplicateFuelStationValidation = new DuplicateFuelStationValidation(findFuelStationByEmailOrCnpjRepository)
  })
  it('Shoul return undefined if repository not found a fuel station', async () => {
    findFuelStationByEmailOrCnpjRepository.run.mockImplementationOnce(async () => Promise.resolve(undefined))
    const result = await duplicateFuelStationValidation.validate(fuelStation)
    expect(result).toBeFalsy()
  })

  it('Should return a DuplicateRecordError if fuel station already exists', async () => {
    const fuelStationResponse: FuelStationResponse = { id: '1', status: 'ACTIVE', ...fuelStation }
    findFuelStationByEmailOrCnpjRepository.run.mockImplementationOnce(async () => Promise.resolve(fuelStationResponse))
    await expect(duplicateFuelStationValidation.validate(fuelStation)).rejects.toThrow()
  })
})
