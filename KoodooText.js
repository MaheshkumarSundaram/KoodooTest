const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]


const accountTypeChecker = (accountBalanceHistory) => {
  let amountList = accountBalanceHistory.map(function(item){
                  return item.account.balance.amount;
                });

  let result = !(amountList.every((amount, i) => i === amountList.length - 1 || (amountList[1] - amountList[0]) + amount === amountList[i + 1]));

  return result ? "A" : "B";
};

accountTypeChecker(accountBalanceHistory, function(response){
    console.log(response);
})

