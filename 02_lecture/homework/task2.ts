function arrayMutateRemove<Type>(
  arr: Array<Type>,
  func: Function
): Array<Type> {
  const removedElements: Array<Type> = [];
  for (let i = 0; i < arr.length; i++) {
    const isRemoved = func.call(this, arr[i]);
    if (isRemoved) {
      removedElements.push(arr[i]);
      arr.splice(i, 1);
      i = i - 1;
    }
  }
  return removedElements;
}
