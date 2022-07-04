import React, { ButtonHTMLAttributes, FC, ReactNode} from "react";
import { composeClassNames } from '../utils/classCompose'
import './button.css'

type buttonType = 'primary' | 'warn'
type buttonSize = 's' | 'm' | 'l'
type dashed = true | false
type round = true | false
type wave = true | false

interface buttonPropsBase {
  children?: ReactNode,
  kind?: buttonType,
  size?: buttonSize,
  dashed?: dashed,
  round?: round,
  wave?: wave,
  showWave?: any
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {

  const { className, children, size, kind, dashed, round, wave, showWave, ...restProps } = props
  const customClass: {[key: string]: string | boolean} = {
    size: size ?? '',
    kind: kind ?? '',
    dashed: dashed === true,
    round: round === true,
    wave: wave === true
  }

  const finalClassName = composeClassNames(className ?? '', 'q-btn', customClass)

  return (
    <button className={finalClassName} {...restProps} onMouseUp={() => showWave()}>{children}</button>
  )

}

export default Button