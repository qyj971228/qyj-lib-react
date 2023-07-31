class Component<T extends object> {
  constructor(prefix: string, props: T, booleanProp: string[]) {
    this.classList = [prefix]
    this.prefix = prefix
    this.setStrProps<T>(props)
    this.setBoolProps<T>(props, booleanProp)
  }

  public readonly _ = '-'
  public readonly prefix: string
  public readonly suffixs: string[] = []
  public readonly classList: string[]

  public setProp(prop: string | undefined) {
    if (prop === undefined) return
    this.suffixs.push(prop)
  }

  public setPropByBoolean(prop: boolean | undefined, val: string) {
    if (prop === undefined) return
    if (prop) this.suffixs.push(val)
  }

  public setStrProps<T extends object>(props: T) {
    Object.keys(props).forEach(key => {
      const value = props[key as keyof T]
      if (typeof value === 'string') this.setProp(value)
    })
  }

  public setBoolProps<T>(props: T, booleanProps: string[]) {
    booleanProps.forEach(key => {
      const value = props[key as keyof T]
      if (value === true) this.setProp(key)
    })
  }

  public getComponentClassName() {
    return this.suffixs.map(suffix => this.prefix + this._ + suffix)
  }

  public getClassName(className: string | undefined) {
    const componentClassName = this.getComponentClassName()
    if (className) {
      const customClassNameArr = className.split(' ')
      return this.classList.concat(componentClassName, customClassNameArr).join(' ')
    }
    return this.classList.concat(componentClassName).join(' ')
  }
}
export default Component
