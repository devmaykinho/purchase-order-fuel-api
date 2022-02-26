import { ComparePassword } from '../../domain/interface/cryptography/compare-password'
import { HashPassword } from '../../domain/interface/cryptography/hash-password'

import bcrypt from 'bcrypt'

export class BcryptAdapter implements HashPassword, ComparePassword {
  constructor (private readonly salt: number) {}

  async hash (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash)
  }
}
