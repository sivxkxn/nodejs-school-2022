function searchSerial(arr: Array<number | string>, val: number | string) {
  let counter: number = 0;
  let arrayOfCounts: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] === val) {
      counter++;
      i++;
    }
    arrayOfCounts.push(counter);
    counter = 0;
  }
  return arrayOfCounts.sort((a, b) => a - b).pop();
}
