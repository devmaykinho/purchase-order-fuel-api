import { MockProxy, mock } from 'jest-mock-extended'
import { SignupUseCase } from './signup.usecase'
import { Validation, ValidationDuplicateRecord, CreateFuelStationRepository, HashPassword } from '../interface'
import { Signup } from '../interface/usecase/signup'
import { newFuelStation } from '../../utils/fixtures/fuel-station.fixture'

const fuelStation = newFuelStation()

describe('Signup UseCase - Unit test', () => {
  let validation: MockProxy<Validation>
  let validationDuplicate: MockProxy<ValidationDuplicateRecord>
  let createFuelStationRepository: MockProxy<CreateFuelStationRepository>
  let generationPasswordHash: MockProxy<HashPassword>
  let signupUseCase: Signup

  beforeEach(() => {
    validation = mock()
    validationDuplicate = mock()
    createFuelStationRepository = mock()
    generationPasswordHash = mock()
    generationPasswordHash.hash.mockReturnValue(Promise.resolve('hash'))
    signupUseCase = new SignupUseCase(
      validation,
      validationDuplicate,
      createFuelStationRepository,
      generationPasswordHash
    )
  })
  it('Should call validation with correct values', () => {
    signupUseCase.run(fuelStation)
    expect(validation.validate).toHaveBeenCalledWith(fuelStation)
  })

  it('Should call validation duplicate record with correct values', () => {
    signupUseCase.run(fuelStation)
    expect(validationDuplicate.validate).toHaveBeenCalledWith(fuelStation)
  })

  it('Should call create fuel station repository with correct value and status PADING', async () => {
    await signupUseCase.run(fuelStation)
    const fuelStationCreated = { ...fuelStation }
    fuelStationCreated.status = 'PEDING'
    fuelStationCreated.password = 'hash'
    expect(createFuelStationRepository.run).toBeCalledWith(fuelStationCreated)
  })
})
