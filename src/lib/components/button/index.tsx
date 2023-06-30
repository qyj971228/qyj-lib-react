import './index.css'

import { ButtonHTMLAttributes } from 'react'

/* type */
type ButtonKind = 'primary' | 'warn' | 'error'
type ButtonSize = 's' | 'm' | 'l'
interface ButtonPropsBase {
  kind: ButtonKind
  size: ButtonSize
  round: boolean
  // dashed: boolean
  // ghost: boolean
  // fullfil: boolean
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>

const prefix = 'qyj-btn'
const _ = prefix + '-'

export function Button({ kind, size, round, children, ...rest }: ButtonProps) {
  /* class */
  const classList = []

  /* prefix */
  classList.push(prefix)

  /* props */
  // kind
  kind && classList.push(_ + kind)
  // size
  size && classList.push(_ + size)
  // round
  round && classList.push(_ + 'round')

  /* attributes */
  const className = classList.join(' ')
  const attributes = { className, ...rest }

  return <button {...attributes}>{children}</button>
}

export default Button

// node.addeventlistener('animationed')
