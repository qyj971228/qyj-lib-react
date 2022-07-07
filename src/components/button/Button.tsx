import React, { ButtonHTMLAttributes, FC, ReactNode} from "react";
import { composeClassNames } from '../../utils/classCompose'
import './button.css'

type buttonType = 'primary' | 'warn' | 'error'
type buttonSize = 's' | 'm' | 'l'
export type theme = 'dark' | ''

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
  theme?: theme,
  showWave?: Function,
  mouseUp?: Function
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {

  const componentPrefix = 'q-btn'

  const { className, children, size, kind, dashed, round, wave, color, style, ghost, simple, circle, disable, text, theme, showWave, onMouseUp, onClick, ...restProps } = props

  function getDisable() {
    if (disable) {
      if (theme) {
        if (kind && text) return `${theme}-text-${kind}`
        if (text) return `${theme}-text-default`
        if (kind && ghost) return `${theme}-ghost-${kind}`
        if (kind) return `${theme}-${kind}` 
        if (ghost) return `${theme}-ghost-default` 
        return theme + '-default'
      } else {
        if (color) return 'color'
        if (text && ghost) return 'default-text'
        if (ghost && kind) return kind + '-ghost'
        if (ghost) return 'ghost'
        if (text && kind) return kind + '-text'
        if (simple) return kind + '-simple'
        if (kind) return kind
        if (text) return 'default-text'
        return 'default'
      }
    }
    return ''
  }

  function getTheme() {
    if (theme) {
      if (kind && text && ghost) return `${theme}-${kind}-text`
      if (!kind && text && ghost) return `${theme}-default-text`
      if (kind && ghost) return `${theme}-${kind}-ghost`
      if (kind && text) return `${theme}-${kind}-text`
      if (kind) return `${theme}-${kind}`
      if (text) return `${theme}-default-text`
      if (ghost) return `${theme}-default-ghost`
      return `${theme}-default`
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
      disable: getDisable(),
      theme: getTheme()
    }
  )

  function getCustomColor() {
    if (theme && !ghost && !text) return '#000'
    if (dashed || text) return color
    if (kind && ghost) return color
    if (kind) return '#fff'
    return color
  }

  function getCustomBackgroundColor() {
    if (ghost || text) return 'transparent'
    if (dashed) return '#fff'
    if (kind) return color
    if (theme) return color
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
      onClick={
        (e) => {
          console.log('click')
          onClick && onClick(e)
        }
      }
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