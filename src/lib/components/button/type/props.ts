import { ButtonHTMLAttributes } from 'react'

type ButtonWeight = 'primary'
type ButtonKind = 'normal' | 'warn' | 'error'
type ButtonSize = 's' | 'm' | 'l'

interface ButtonPropsBase {
  kind: ButtonKind
  size: ButtonSize
  round: boolean
  dashed: boolean
  ghost: boolean
  weight: ButtonWeight
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>

export default ButtonProps
export const PREFIX = 'qyj-btn'
export const BUTTONKIND = ['normal', 'warn', 'error']
export const SELECTIVITY = ['dashed', 'ghost']
export const ROUND = 'round'
export const DASHED = 'dashed'
export const GHOST = 'ghost'
