let myAccount = {
  name: "Carlos Souza",
  expenses: 0,
  income: 0,
};

let addExpense = function (expense) {
  return (myAccount.expenses += expense);
};
let addIncome = function (income) {
  return (myAccount.income += income);
};
let getAccountSummary = function (myAccount) {
  return `    Name:    ${myAccount.name}
          Expenses: R$ ${myAccount.expenses}
            Income:  R$ ${myAccount.income}`;
};
let resetAccount = function (myAccount) {
  myAccount.expenses = 0;
  myAccount.income = 0;
  return myAccount;
};

const income = addIncome(1000);
console.log(getAccountSummary(myAccount));

const expense = addExpense(500);
console.log(getAccountSummary(myAccount));
const reset = resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
