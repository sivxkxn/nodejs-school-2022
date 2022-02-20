async function runSequentially<Type, TResult>(
  array: Array<Type>,
  func: (element: Type, index: number) => Promise<TResult>
): Promise<TResult[]> {
  const resultArray: Array<TResult> = [];
  for (let index = 0; index < array.length; index++) {
    let item = await func(array[index], index);
    resultArray.push(item);
  }
  return resultArray;
}
