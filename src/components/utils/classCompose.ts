/**
 * @param origin origin class
 * @param prefix component prefix
 * @param custom custom class
 */
 export const composeClassNames = (origin: string, prefix: string, custom: {[key: string]: string}) => {
  const finalClass = []
  finalClass.push(origin)
  Object.keys(custom).forEach(key => {
    custom[key] ? finalClass.push(`${prefix}-${key}-${custom[key]}`) : ''
  })
  const finalClassName = finalClass.join(' ')
  return finalClassName
}