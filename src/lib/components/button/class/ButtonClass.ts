import ComponentsClass from "../../../class/ComponentClass"
import { arrFindReplace } from "../../../utils/tool"
import { BUTTONKIND, SELECTIVITY } from "../type/props"

class Button extends ComponentsClass {
  public setWeight(weight: string) {
    let kind = ''
    BUTTONKIND.forEach(el => {
      if (this.suffixs.includes(el)) kind = el
    })
    // 给予默认primary样式
    if (!BUTTONKIND.includes(kind)) {
      this.suffixs.push(weight + this._ + BUTTONKIND[0])
      return
    }
    // 使用primary替换kind颜色样式
    arrFindReplace(this.suffixs, kind, weight + this._ + kind)
    // 使用primary时移除其他可选样式
    SELECTIVITY.forEach(selectivity => { arrFindReplace(this.suffixs, selectivity) })
  }
}
export default Button
