//Problem link: https://edabit.com/challenge/CvPCBc9FtTLix9zov

function uniqueSort(arr) {
  return [...new Set(arr.sort((a, b) => a - b))];
}
