export const strPlus = (...args: string[]) => {
  return args.reduce((pre, cur) => {
    return pre + cur
  })
}

export const arrFindReplace = (arr: any[], find: any, replace?: any) => {
  const index = arr.indexOf(find)
  if (index <= -1) return
  if (index >= 0) {
    if (replace !== undefined) arr.splice(index, 1, replace)
    else arr.splice(index, 1)
  }
}
