function solveMeSecond(a: number, b: number): number {
  return a + b;
}

function main() {
  let a: number = parseInt(readLine());
  let b: number = parseInt(readLine());

  let final: number = solveMeSecond(a, b);
  console.log(final);
}
