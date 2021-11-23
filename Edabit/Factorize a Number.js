//Problem link: https://edabit.com/challenge/zLYbAPk8NMnwoPhjG

function factorize(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }

  return arr;
}
