import { Controller, HttpRequestModel } from '../interfaces/controller'
import { Signup } from '../../domain/interface'
import { SignupController } from './signup.controller'
import { newFuelStation } from '../../utils/fixtures'
import { mock, MockProxy } from 'jest-mock-extended'

const fuelStation = newFuelStation()

const httpRequest: HttpRequestModel = {
  body: fuelStation
}

describe('Signup Controller - Unit test', () => {
  let signupController: Controller
  let signupUsecase: MockProxy<Signup>

  beforeEach(async () => {
    signupUsecase = mock()
    signupController = new SignupController(signupUsecase)
  })
  it('Should return 200 if the usecase processes with successfully', async () => {
    const result = await signupController.handle(httpRequest)
    expect(result.statusCode).toBe(201)
  })

  it('Should return 500 if usecase throws', async () => {
    signupUsecase.run.mockImplementationOnce(() => { throw new Error() })
    const result = await signupController.handle(httpRequest)
    expect(result.statusCode).toBe(500)
  })
})
