function arrayMutateRemove<Type>(
  arr: Array<Type>,
  predicat: (element: Type) => boolean
): Array<Type> {
  return arr.reduce(
    (acc, currentElement, index) =>
      predicat(currentElement) ? [...acc, arr.splice(index, 1)[0]] : acc,
    [] as Array<Type>
  );
}