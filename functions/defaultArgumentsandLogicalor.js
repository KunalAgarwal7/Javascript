function displayScore(score = 100) {
  return score || 0;
}

console.log(displayScore(0));
console.log(displayScore(80));
