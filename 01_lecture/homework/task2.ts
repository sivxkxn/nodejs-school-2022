interface IArgumentsAndResult {
  result: number;
  args: Array<number>;
}

function wrapper(fn: Function): Function {
  const bufferOfCached: Array<IArgumentsAndResult> = [];
  return function (): number {
    const resultOfOperation: number = fn.apply(this, arguments);
    const foundObj: IArgumentsAndResult = bufferOfCached.find(
      (x: IArgumentsAndResult): boolean =>
        x.result === resultOfOperation &&
        x.args.join("") === [...arguments].join("")
    );
    if (foundObj) {
      return foundObj.result;
    }
    bufferOfCached.push({ args: [...arguments], result: resultOfOperation });
    return resultOfOperation;
  };
}
