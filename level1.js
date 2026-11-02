/**
 * @param {string} rawName
 * @returns
 */
function cleanUsername(rawName) {
  const finalName = rawName.trim().toLowerCase();

  if (finalName.length > 10) throw new Error('Username too long');

  return finalName;
}

console.log(cleanUsername(' Amine_Dev '));
console.log(cleanUsername('Mohamed_Amine_123'));
