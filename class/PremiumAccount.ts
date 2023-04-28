import { DioAccount } from "./DioAccount";


export class PremiunAccount extends DioAccount {

  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance)
  }

  deposite = (value: number): void => {
    this.deposit(value + 10)
    console.log('depositado')
  }
}