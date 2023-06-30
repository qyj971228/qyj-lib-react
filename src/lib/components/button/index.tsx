import Com from '../../../class/Com'
import './index.css'

import { ButtonHTMLAttributes } from 'react'

/* type */
type ButtonKind = 'primary' | 'warn' | 'error'
type ButtonSize = 's' | 'm' | 'l'
type ButtonMode = 'fill' | 'dashed' | 'ghost'
interface ButtonPropsBase {
  kind: ButtonKind
  size: ButtonSize
  round: boolean
  mode: ButtonMode
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>

export function Button(props: ButtonProps) {
  const { kind, size, round, mode, children, ...rest } = props

  const button = new Com('qyj-btn')

  kind && button.pushStyle(kind)
  size && button.pushStyle(size)
  round && button.pushStyle('round')
  mode && button.pushStyle(mode)

  const attributes = {
    className: button.className(),
    ...rest
  }

  return <button {...attributes}>{children}</button>
}

export default Button

// node.addeventlistener('animationed')
