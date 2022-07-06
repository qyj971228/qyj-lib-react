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
  color?: string,
  ghost?: boolean,
  simple?: boolean,
  showWave?: Function,
  mouseUp?: Function
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {

  const componentPrefix = 'q-btn'

  const { className, children, size, kind, dashed, round, wave, color, style, ghost, simple, showWave, onMouseUp, ...restProps } = props

  const finalClassName = composeClassNames(
    className, 
    componentPrefix, 
    {
      size: size,  // q-btn-[size]
      kind: simple ? kind + '-simple' : kind,  // q-btn-[kind] | q-btn-[kind-simple]
      dashed: dashed,  // q-btn-dashed
      round: round,  // q-btn-round
      wave: wave,  // q-btn-wave
      ghost: ghost ? kind ? kind : 'default' : '', // q-btn-ghost-[kind]
      color: color ? true : false  // q-btn-color
    }
  )

  const customColorStyle = {  // from props.color
    borderColor: color,
    color: kind ? '#fff' : color,
    backgroundColor: kind ? color : ghost ? 'transparent' : '#fff',
  }

  const finalStyle = color ? {...customColorStyle, ...style} : {...style}  // props.style is higher priority than props.color

  return (
    <button 
      {...restProps}
      className={finalClassName}
      style={{...finalStyle}}
      onMouseUp={
        (e) => {
          onMouseUp && onMouseUp(e)
          showWave && showWave()
        }
      }
    >
      {children}
    </button>
  )

}

export default Button