import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from 'typeorm'
import { hashPasswordTransform } from './hash-password-transform'

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  cpf: string

  @Column()
  email: string

  @Column({
    select: false,
    transformer: hashPasswordTransform
  })
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}