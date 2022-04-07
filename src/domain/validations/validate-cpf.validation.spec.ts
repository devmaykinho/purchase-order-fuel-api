import { ValidationCpf } from './validation-cpf.validation'
describe('ValidateCpf - Unit test', () => {
  it('Should return false if cpf is invalid with same number', () => {
    const validationCpf = new ValidationCpf()
    expect(validationCpf.validate('111.111.111-11')).toBeFalsy()
  })

  it('Should return false if cpf is invalid with same number', () => {
    const validationCpf = new ValidationCpf()
    expect(validationCpf.validate('222.222.222-22')).toBeFalsy()
  })

  it('Should return false if cpf is invalid', () => {
    const validationCpf = new ValidationCpf()
    expect(validationCpf.validate('412.750.450-00')).toBeFalsy()
  })

  it('Should return true if cpf is valid', () => {
    const validationCpf = new ValidationCpf()
    expect(validationCpf.validate('341.275.045-01')).toBeTruthy()
  })
})
