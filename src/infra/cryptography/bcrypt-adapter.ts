import bcrypt from 'bcrypt'
import { IHasher } from "../../data/protocols/cryptography/hasher";

export class BcryptAdapter implements IHasher{
  constructor(
    private readonly salt: number
  ) {}

  async hash(value: string): Promise<string> {
    const dataHashed = await bcrypt.hash(value, this.salt)
    return dataHashed 
  }
}