const newA: number[] = [];
const newB: number[] = [];

function compareTriplets(a: number[], b: number[]) {
  let pointsA: number = 0;
  let pointsB: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pointsA++;
    } else if (b[i] > a[i]) {
      pointsB++;
    }
  }
  return [pointsA, pointsB];
}
