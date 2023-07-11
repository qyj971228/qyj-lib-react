import './index.css'
import ButtonClass from './class/ButtonClass'
import ButtonProps, { DASHED, GHOST, PREFIX, ROUND } from './type/props'

export function Button(props: ButtonProps) {
  const { kind, size, round, dashed, ghost, weight, children, className, ...rest } = props

  const button = new ButtonClass(PREFIX)

  kind && button.setProp(kind)
  size && button.setProp(size)
  round && button.setProp(ROUND)
  dashed && button.setProp(DASHED)
  ghost && button.setProp(GHOST)
  weight && button.setWeight(weight)

  const attributes = {
    className: button.getClassName(className),
    ...rest
  }

  return <button {...attributes}>{children}</button>
}

export default Button
