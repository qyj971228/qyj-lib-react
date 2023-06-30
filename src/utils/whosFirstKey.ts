export const whosFirstKey = (object: any, arr: string[]): string | null => {
  let key: any
  for (key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] === true && arr.includes(key)) {
        return key
      }
    }
  }
  return null
}
