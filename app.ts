import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiunAccount } from './class/PremiumAccount'



// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Ozzy', 10)
// console.log(peopleAccount);
// peopleAccount.deposit()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount);


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10, 250)

peopleAccount.deposit(250)
peopleAccount.withdraw(10)

const premiunAccount: PremiunAccount = new PremiunAccount('Oseas', 2, 750)

console.log(premiunAccount.deposite(10))
console.log(premiunAccount.getBalance())