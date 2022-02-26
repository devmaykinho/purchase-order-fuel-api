import { fuelStationMapper } from './fuel-station.mapper'
import { newFuelStationResponse } from '../../../../utils/fixtures'

const fuelStationResponse = newFuelStationResponse()

describe('FuelStationMapper - Unit test', () => {
  it('should return undefined if entity is not provided', () => {
    expect(fuelStationMapper(undefined)).toBe(undefined)
  })

  it('Should return a fuel station response', () => {
    const { id, ...fuelStationEntity } = fuelStationResponse
    const fuelStationMapped = fuelStationMapper({ id: Number(fuelStationResponse.id), ...fuelStationEntity })
    expect(fuelStationMapped).toEqual(fuelStationResponse)
  })
})
