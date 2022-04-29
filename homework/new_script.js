'use strict'

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null) {
        alert("Введи число дэган");
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
           
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != ''
                && (typeof(b)) != '' && a.length < 50) {
        
                    console.log('done');
                    appData.expenses[a] = b;
                } else {
        
                console.log('bad result');
                i--;
        
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний уровень достатка');
        } else if (appData.moneyPerDay > 2000 ) {
            console.log('высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let questionOptionalExpenses = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptionalExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "" );

        if (typeof(items) == 'string' && typeof(items) != null && items != ''){
            appData.income = items.split(', ');
            appData.income.push(prompt('Что-то еще?'));
            appData.income.sort();
        }

        this.income.forEach(function(item, i, mass){
            alert("Способы доп. заработка: " + (i+1) + '-' + item);
        })

    }
};

for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + '-' + appData[key])
}










