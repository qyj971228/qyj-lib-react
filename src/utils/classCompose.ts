/**
 * @param origin origin class
 * @param prefix component prefix
 * @param custom custom class
 */
export const composeClassNames = (
  origin: string | undefined,
  prefix: string,
  custom: Record<string, string | boolean | undefined>
) => {
  const finalClass = []

  finalClass.push(`${prefix}-default`) // default class

  origin ? finalClass.push(origin) : '' // without originClass; nothing

  Object.keys(custom).forEach((key) => {
    // if val equals '' or false; return nothing
    if (typeof custom[key] === 'string') {
      custom[key] ? finalClass.push(`${prefix}-${key}-${custom[key]}`) : ''
    } else if (typeof custom[key] === 'boolean') {
      custom[key] ? finalClass.push(`${prefix}-${key}`) : ''
    }
  })

  const finalClassName = finalClass.join(' ')

  return finalClassName
}
