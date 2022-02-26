import { makeSignupController } from './signup.factory'
import { SignupController } from '../../presentation/controllers/signup.controller'

jest.mock('../../presentation/controllers/signup.controller')
describe('SignupFactory - Unit test', () => {
  it('Should call SignupController', () => {
    makeSignupController()
    expect(SignupController).toHaveBeenCalled()
  })
})
