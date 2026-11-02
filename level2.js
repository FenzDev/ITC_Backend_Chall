const db = [
  { id: 1, email: 'admin@test.com', pass: 'admin123' },
  { id: 2, email: 'user@test.com', pass: 'user2024' },
];

function loginUser(email, password) {
  return db.find((user) => user.email === email && user.pass === password)
    ? {
        success: true,
        token: 'ACCESS_GRANTED',
      }
    : db.find((user) => user.email === email)
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
