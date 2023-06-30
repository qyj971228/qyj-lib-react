class Com {
  constructor(prefix: string, styleConnector: string = '-') {
    this.prefix = prefix
    this.styleConnector = styleConnector
    this.classList = [prefix]
    this._ = prefix + styleConnector
  }

  public _: string
  public prefix: string
  public styleConnector: string
  public classList: string[]

  public pushStyle(params: string) {
    this.classList.push(this._ + params)
  }

  public className() {
    return this.classList.join(' ')
  }
}
export default Com
