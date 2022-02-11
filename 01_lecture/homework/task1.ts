function deepCloneObj(obj: Object): Object {
  return JSON.parse(JSON.stringify(obj));
}
