import { ValidateCpf } from '../interface/validations/validation-cpf'

export class ValidationCpf implements ValidateCpf {
  validate = (cpf: string): boolean => {
    const cpfFormated = this.removeNotNumber(cpf)
    const cpfWithOutDigit = cpfFormated.slice(0, 9)
    if (this.hasAllDigitsEqual(cpfFormated)) return false
    const firstDigit = this.calculateFirstDigit(cpfWithOutDigit)
    const secondDigit = this.calculateSecondDigit(`${cpfWithOutDigit}${firstDigit}`)
    const cpfValidated = `${cpfWithOutDigit}${firstDigit}${secondDigit}`
    if (cpfFormated !== cpfValidated) return false
    return true
  }

  removeNotNumber = (cpf: string): string => {
    return cpf.replace(/\D/g, '')
  }

  hasAllDigitsEqual = (cpf: string): boolean => {
    return cpf.split('').every(digit => digit === cpf[0])
  }

  calculateFirstDigit = (cpf: string): number => {
    const multiplicationFactors = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    return this.calculateDigit(cpf, multiplicationFactors)
  }

  calculateSecondDigit = (cpf: string): number => {
    const multiplicationFactors = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    return this.calculateDigit(cpf, multiplicationFactors)
  }

  calculateDigit = (cpf: string, multiplicationFactors: number[]): number => {
    let resultSumDigits = 0
    for (let index = 0; index < cpf.length; index++) {
      resultSumDigits += Number(cpf[index]) * multiplicationFactors[index]
    }
    const restDivision = resultSumDigits % 11
    if (restDivision < 2) return 0
    return 11 - restDivision
  }
}
