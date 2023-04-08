import './index.css'

import { ButtonHTMLAttributes } from 'react'

type buttonKind = 'primary' | 'other'
interface buttonPropsBase {
  kind: buttonKind
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps> & Partial<buttonPropsBase>

export function Button({ kind, children, ...rest }: ButtonProps) {
  const classList = []
  kind && classList.push(`qyj-btn-${kind}`)
  classList.length === 0 && classList.push('qyj-btn')
  const className = classList.join(' ')
  return <button {...{ className, ...rest }}>{children}</button>
}

export default Button

// node.addeventlistener('animationed')
