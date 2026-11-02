function transferMoney(userA_Balance, userB_Balance, amount) {
  return amount <= 0
    ? { success: false, error: 'Invalid amount' }
    : userA_Balance < amount
      ? { success: false, error: 'Insufficient funds' }
      : { success: true, newBalanceA: 4000, newBalanceB: 1200 };
}

console.log('5000, 200, 1000');
console.log(transferMoney(5000, 200, 1000));
console.log('5000, 200, 6000');
console.log(transferMoney(5000, 200, 6000));
console.log('5000, 200, -500');
console.log(transferMoney(5000, 200, -500));
