import React, { ButtonHTMLAttributes, FC, ReactNode} from "react";
import { composeClassNames } from '../../utils/classCompose'
import './button.css'

type buttonType = 'primary' | 'warn' | 'error'
type buttonSize = 's' | 'm' | 'l'

interface buttonPropsBase {
  children?: ReactNode,
  kind?: buttonType,
  size?: buttonSize,
  dashed?: boolean,
  round?: boolean,
  wave?: boolean,
  // showWave?: any,
  color?: string,
  ghost?: boolean,
  simple?: boolean,
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {

  const { className, children, size, kind, dashed, round, wave, 
    // showWave,
  color, style, ghost, simple, ...restProps } = props

  const finalClassName = composeClassNames(
    className, 
    'q-btn', 
    {
      size: size,  // [size] | nothing
      kind: simple ? kind + '-simple' : kind,  // [kind] | nothing
      dashed: dashed,  // dashed | nothing
      round: round,  // round | nothing
      wave: wave,  // wave | nothing
      ghost: ghost ? kind ? kind : 'default' : '', // ghost-[kind] | nothing
      color: color ? true : false
    }
  )

  const customColorStyle = {
    borderColor: color,
    color: kind ? '#fff' : color,
    backgroundColor: kind ? color : ghost ? 'transparent' : '#fff',
  }

  const finalStyle = color ? {...customColorStyle, ...style} : {...style}  // props.style is higher priority than props.color

  return (
    <button 
      className={finalClassName}
      {...restProps}
      style={{...finalStyle}}  
      // onMouseUp={() => showWave()}
    >
      {children}
    </button>
  )

}

export default Button