import { arrFindReplace, strPlus } from "../utils/tool"
import { BUTTON_KIND, SELECTIVITY } from "../components/button"
class Com {
  constructor(prefix: string) {
    this.classList = [prefix]
    this._ = prefix + this.link
  }

  private readonly link = '-'
  private readonly _: string
  private readonly suffixs: string[] = []
  private readonly classList: string[]

  public pushStyle(params: string) {
    this.suffixs.push(params)
  }

  public setWeight(weight: string) {
    let kind = ''
    BUTTON_KIND.forEach(el => {
      if (this.suffixs.includes(el)) kind = el
    })
    // 给予默认primary样式
    if (!BUTTON_KIND.includes(kind)) {
      this.suffixs.push(strPlus(weight, this.link, BUTTON_KIND[0]))
      return
    }
    // 使用primary替换kind颜色样式
    arrFindReplace(this.suffixs, kind, strPlus(weight, this.link, kind))
    // 使用primary时移除其他可选样式
    SELECTIVITY.forEach(selectivity => {
      arrFindReplace(this.suffixs, selectivity)
    })
  }

  public getClassName() {
    this.suffixs.forEach(suffix => {
      this.classList.push(this._ + suffix)
    })
    return this.classList.join(' ')
  }
}
export default Com
