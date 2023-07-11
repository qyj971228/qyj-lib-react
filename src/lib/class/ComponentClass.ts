class Component {
  constructor(prefix: string) {
    this.classList = [prefix]
    this.prefix = prefix
  }

  public readonly _ = '-'
  public readonly prefix: string
  public readonly suffixs: string[] = []
  public readonly classList: string[]

  public setProp(prop: string) {
    this.suffixs.push(prop)
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
