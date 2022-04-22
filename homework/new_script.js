'use strict'

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let obligatoryExpQuestion1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpAnswer1 = prompt("Во сколько обойдется?", ""),
    obligatoryExpQuestion2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpAnswer2 = prompt("Во сколько обойдется?", "");

appData.expenses.obligatoryExpQuestion1 = obligatoryExpAnswer1;
appData.expenses.obligatoryExpQuestion2 = obligatoryExpAnswer2;

alert(appData.budget / 30);
console.log(appData);


