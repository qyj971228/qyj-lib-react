import Com from '../../class/Com'
import './index.css'

import { ButtonHTMLAttributes } from 'react'

export const BUTTON_KIND = ['normal', 'warn', 'error']
export const SELECTIVITY = ['dashed', 'ghost']
type ButtonKind = 'normal' | 'warn' | 'error'
type ButtonSize = 's' | 'm' | 'l'
export type ButtonWeight = 'primary'
interface ButtonPropsBase {
  kind: ButtonKind
  size: ButtonSize
  round: boolean
  dashed: boolean
  ghost: boolean
  weight: ButtonWeight
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>

export function Button(props: ButtonProps) {
  const { kind, size, round, dashed, ghost, weight, children, ...rest } = props

  const button = new Com('qyj-btn')

  kind && button.pushStyle(kind)
  size && button.pushStyle(size)
  round && button.pushStyle('round')
  dashed && button.pushStyle('dashed')
  ghost && button.pushStyle('ghost')
  weight && button.setWeight(weight)

  const attributes = {
    className: button.getClassName(),
    ...rest
  }

  return <button {...attributes}>{children}</button>
}

export default Button

// node.addeventlistener('animationed')
