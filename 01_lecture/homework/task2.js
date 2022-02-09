function wrapper(fn) {
  const bufferOfCached = [];
  return function () {
    resultOfOperation = fn.apply(this, arguments);
    let foundObj = bufferOfCached.find(
      (x) =>
        x.result === resultOfOperation &&
        x.args.join("") === [...arguments].join("")
    );
    if (foundObj) {
      return foundObj.result;
    } else {
      bufferOfCached.push({ args: [...arguments], result: resultOfOperation });
      return resultOfOperation;
    }
  };
}
