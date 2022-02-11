async function runSequentially<Type>(
  array: Array<Type>,
  func: Function
): Promise<Type[]> {
  const resultArray: Array<Type> = [];
  for (let index in array) {
    let item = await func.apply(this, [array[index], index]);
    resultArray.push(item);
  }
  return resultArray;
}
