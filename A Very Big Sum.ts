function aVeryBigSum(ar: number[]): number {
  // Write your code here
  return ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
