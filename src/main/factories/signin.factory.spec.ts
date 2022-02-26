import { makeSigninController } from './signin.factory'
import { SigninController } from '../../presentation/controllers/signin.controller'

jest.mock('../../presentation/controllers/signin.controller')
describe('SigninFactory - Unit test', () => {
  it('Should call SignupController', () => {
    makeSigninController()
    expect(SigninController).toHaveBeenCalled()
  })
})
