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
  circle?: boolean,
  disable?: boolean,
  text?: boolean,
  showWave?: Function,
  mouseUp?: Function
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {

  const componentPrefix = 'q-btn'

  const { className, children, size, kind, dashed, round, wave, color, style, ghost, simple, circle, disable, text, showWave, onMouseUp, ...restProps } = props

  function getDisable() {
    if (disable) {
      if (color) return 'color'
      if (text && ghost) return 'default-text'
      if (ghost) return 'ghost'
      if (text && kind) return kind + '-text'
      if (simple) return kind + '-simple'
      if (kind) return kind
      if (text) return 'default-text'
      return 'default'
    }
    return ''
  }

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
      color: color ? true : false,  // q-btn-color
      circle: circle ? size ? size : 'default' : '',  // q-btn-circle-[size]
      text: text ? kind ? kind : 'default' : false,  // q-btn-text
      disable: getDisable(),  // q-btn-disable-[kind | default | ghost]
    }
  )

  function getCustomColor() {
    if (dashed || text) return color
    if (kind) return '#fff'
    return color
  }

  function getCustomBackgroundColor() {
    if (ghost || text) return 'transparent'
    if (dashed) return '#fff'
    if (kind) return color
    return '#fff'
  }

  const customColorStyle = {  // from props.color
    borderColor: text ? 'transparent' : color,
    color: getCustomColor(),
    backgroundColor: getCustomBackgroundColor(),
    filter: disable ? 'brightness(0.7)' : undefined
  }

  const finalStyle = color ? {...customColorStyle, ...style} : {...style}  // props.style is higher priority than props.color

  function getFinalChildren() {
    if (circle) {
      if (typeof children === 'string') {
        return children[0].toLocaleUpperCase()
      }
    }
    return children
  }

  const finalChildren = getFinalChildren()

  return (
    <button 
      {...restProps}
      className={finalClassName}
      style={{...finalStyle}}
      disabled={disable}
      onClick={() => {console.log('click')}}
      onMouseUp={
        (e) => {
          onMouseUp && onMouseUp(e)
          showWave && showWave()
        }
      }
    >
      {finalChildren}
    </button>
  )

}

export default Button