import './index.css'

import { ButtonHTMLAttributes } from 'react'

/* type */
type ButtonKind = 'primary' | 'warn' | 'error'
type ButtonSize = 's' | 'm' | 'l'
interface ButtonPropsBase {
  kind: ButtonKind
  size: ButtonSize
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>

const prefix = 'qyj-btn'
const prefix_ = prefix + '-'

export function Button({ kind, size, children, ...rest }: ButtonProps) {
  /* class */
  const classList = []

  /* prefix */
  classList.push(prefix)

  /* props */
  // kind
  kind && classList.push(prefix_ + kind)
  // size
  size && classList.push(prefix_ + size)

  /* attributes */
  const className = classList.join(' ')
  const attributes = { className, ...rest }

  return <button {...attributes}>{children}</button>
}

export default Button

// node.addeventlistener('animationed')
