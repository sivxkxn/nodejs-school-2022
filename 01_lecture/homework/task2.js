function wrapper(fn) {
  return function () {
    return fn.apply(this, arguments);
  };
}
