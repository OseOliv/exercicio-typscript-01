import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number ){
    super(name, accountNumber, balance)
  }


  getLoan = (value: number): void  => {
    if (this.validateStatus())
    console.log('Você pegou um empréstimo')
    return this.deposit(value)
  }

}
