function simpleArraySum(ar: number[]): number {
  function sum(arr: number[], n: number): number {
    if (n <= 0) {
      return 0;
    }
    return sum(arr, n - 1) + arr[n - 1];
  }

  return sum(ar, ar.length);
}
