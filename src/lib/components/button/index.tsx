import './index.css'
import ButtonClass from './class/ButtonClass'
import ButtonProps, { ButtonPropsBase } from './type/props'

export function Button(props: ButtonProps) {
  const { kind, size, round, dashed, ghost, weight, children, className, ...rest } = props
  const baseProps: ButtonPropsBase = { kind, size, round, dashed, ghost, weight }

  const button = new ButtonClass(baseProps)

  const attributes = {
    className: button.getClassName(className),
    ...rest
  }

  return <button {...attributes}>{children}</button>
}

export default Button
