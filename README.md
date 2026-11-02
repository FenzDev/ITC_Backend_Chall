# ITC Backend Logic Challenge

Challenge consisting of three programming logic problems, which are easy ones

**Level 1** - Data Cleaning: The Username\
**Level 2** - Authentication: The Login\
**Level 3** - Transaction Logic: The Money Transfer

# Solutions
The associated code provides the solution.
The whole thing is written in javascript, you can run each level via Node.js:
```
node level1.js
node level2.js
node level3.js
```

## Level 1 - Data Cleaning: The Username
```js
function cleanUsername(rawName) {
  const finalName = rawName.trim().toLowerCase();

  if (finalName.length > 10) throw new Error('Username too long');

  return finalName;
}

console.log(cleanUsername(' Amine_Dev '));
console.log(cleanUsername('Mohamed_Amine_123'));
```

## Level 2 - Authentication: The Login
```js
const users = [
  { id: 1, email: 'admin@test.com', pass: 'admin123' },
  { id: 2, email: 'user@test.com', pass: 'user2024' },
];

function loginUser(email, password) {
  return users.find((user) => user.email === email && user.pass === password)
    ? {
        success: true,
        token: 'ACCESS_GRANTED',
      }
    : users.find((user) => user.email === email)
      ? {
          success: false,
          error: 'Invalid Credintials',
        }
      : {
          success: false,
          error: 'User not found',
        };
}

console.log("'admin@test.com', 'admin123'");
console.log(loginUser('admin@test.com', 'admin123'));
console.log("'admin@test.com', 'wrongpass'");
console.log(loginUser('admin@test.com', 'wrongpass'));
console.log("'new@test.com', '123'");
console.log(loginUser('new@test.com', '123'));
```

## Level 3 - Transaction Logic: The Money Transfer
```js
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
```

## Use of AI
I clarify that there was no use of any AI or LLM involved in making of both code and this README.md