function searchSerial(arr, val) {
  let counter = 0;
  let arrayOfCounts = [];
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
