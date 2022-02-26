import { Controller, HttpRequestModel } from '../interfaces/controller'
import { Signin } from '../../domain/interface'
import { SigninController } from './signin.controller'
import { mock, MockProxy } from 'jest-mock-extended'

const httpRequest: HttpRequestModel = {
  body: {
    email: 'any_email',
    password: 'any_password'
  }
}

describe('Signup Controller - Unit test', () => {
  let signinController: Controller
  let signinUsecase: MockProxy<Signin>

  beforeEach(async () => {
    signinUsecase = mock()
    signinController = new SigninController(signinUsecase)
  })
  it('Should return 200 if the user is authenticated', async () => {
    const result = await signinController.handle(httpRequest)
    expect(result.statusCode).toBe(200)
  })

  it('Should return 500 if usecase throws', async () => {
    signinUsecase.run.mockImplementationOnce(() => { throw new Error() })
    const result = await signinController.handle(httpRequest)
    expect(result.statusCode).toBe(500)
  })
})
