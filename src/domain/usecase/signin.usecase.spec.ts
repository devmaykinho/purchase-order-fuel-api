import { UnauthorizedError } from '../../utils/error'
import { newFuelStationResponse } from '../../utils/fixtures'
import { SigninUseCase } from './signin.usecase'
import { FindFuelStationByEmailRepository, ComparePassword, Encrypter, Validation } from '../interface'
import { mock, MockProxy } from 'jest-mock-extended'
import { Signin } from '../interface/usecase/signin'
import { SigninModel } from '../models/signin'
import { SigninResponse } from '../response/signin.response'

const fuelStation = newFuelStationResponse()

const credentions: SigninModel = {
  email: 'anyemail@teste.com',
  password: 'any_password'
}

const signinReponse: SigninResponse = {
  token: 'token',
  fuelStation: fuelStation
}
describe('SigninUseCase - Unit test', () => {
  let validation: MockProxy<Validation>
  let findFuelStationByEmail: MockProxy<FindFuelStationByEmailRepository>
  let comparePassword: MockProxy<ComparePassword>
  let encrypter: MockProxy<Encrypter>
  let signinUseCase: Signin

  beforeEach(() => {
    jest.clearAllMocks()
    validation = mock()
    findFuelStationByEmail = mock()
    comparePassword = mock()
    encrypter = mock()
    signinUseCase = new SigninUseCase(
      validation,
      findFuelStationByEmail,
      comparePassword,
      encrypter
    )
  })

  it('Should call all dependencies with correct values', async () => {
    findFuelStationByEmail.run.mockReturnValue(Promise.resolve(fuelStation))
    comparePassword.compare.mockReturnValue(Promise.resolve(true))
    encrypter.encrypt.mockReturnValue(Promise.resolve('token'))
    await signinUseCase.run(credentions)
    expect(validation.validate).toHaveBeenCalledWith(credentions)
    expect(findFuelStationByEmail.run).toHaveBeenCalledWith(credentions.email)
    expect(comparePassword.compare).toHaveBeenCalledWith(credentions.password, fuelStation.password)
    expect(encrypter.encrypt).toHaveBeenCalledWith(fuelStation.cnpj)
  })
  it('Should return UnauthorizedError if fuel station does not exist', async () => {
    findFuelStationByEmail.run.mockReturnValue(Promise.resolve(undefined))
    await expect(signinUseCase.run(credentions)).rejects.toThrow(new UnauthorizedError())
  })

  it('Should return UnauthorizedError if password is invalid', async () => {
    comparePassword.compare.mockReturnValue(Promise.resolve(false))
    await expect(signinUseCase.run(credentions)).rejects.toThrow(new UnauthorizedError())
  })

  it('Should return SignReponse if fuel station exists and password is correct', async () => {
    findFuelStationByEmail.run.mockReturnValue(Promise.resolve(fuelStation))
    comparePassword.compare.mockReturnValue(Promise.resolve(true))
    encrypter.encrypt.mockReturnValue(Promise.resolve('token'))
    const result = await signinUseCase.run(credentions)
    expect(result).toEqual(signinReponse)
  })
})
