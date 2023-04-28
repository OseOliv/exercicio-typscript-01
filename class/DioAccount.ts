export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number
  private status: boolean = true

  constructor(name: string, accountNumber: number, balance: number){
    this.name = name
    this.accountNumber = accountNumber
    this.balance = balance
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log('Voce depositou')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      this.balance = this.balance - value
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error("Conta Invalida");
  };
}
