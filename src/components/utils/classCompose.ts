/**
 * @param origin origin class
 * @param prefix component prefix
 * @param custom custom class
 */
 export const composeClassNames = (origin: string, prefix: string, custom: {[key: string]: string | boolean}) => {
  const finalClass = []
  finalClass.push(`${prefix}-default`)
  origin ? finalClass.push(origin) : ''
  Object.keys(custom).forEach(key => {
    if (typeof custom[key] === 'string') {
      custom[key] ? finalClass.push(`${prefix}-${key}-${custom[key]}`) : ''
    } else if (typeof custom[key] === 'boolean') {
      custom[key] ? finalClass.push(`${prefix}-${key}`) : ''
    }
  })
  const finalClassName = finalClass.join(' ')
  return finalClassName
}