import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode, useContext } from "react";
import { theme, ThemeContext } from '../theme/Theme'
import { composeClassNames } from '../utils/classCompose'
import './button.css'

type buttonType = 'primary' | 'warn'
type buttonSize = 's' | 'm' | 'l'
type dashed = true | false

interface buttonPropsBase {
  children?: ReactNode,
  btype?: buttonType,
  size?: buttonSize,
  theme?: theme,
  dashed?: dashed
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = buttonPropsBase & AnchorHTMLAttributes<HTMLElement>

type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>  // Partial: 为所有属性追加 undefinded 类型

const Button: FC<ButtonProps> = (props) => {
  const { 
    className,
    children,
    size,
    btype,
    theme,
    dashed,
    ...restProps 
  } = props
  const themeProvide =  useContext(ThemeContext)
  // const originClass = `${className ?? ''}`
  // const sizeClass = `q-btn-size-${size}`
  // const typeClass = `q-btn-type-${btype}`
  // const themeClass = `q-btn-theme-${theme || themeProvide || 'light'}`
  // const dashedClass = `q-btn-dashed-${dashed ? 'dashed' : ''}`
  // const finalClassName = [originClass, sizeClass, typeClass, themeClass, dashedClass].join(' ')
  const customClass: {[key: string]: string} = {
    size: size || 'm',
    type: btype || 'primary',
    theme: theme || themeProvide || 'light',
    dashed: dashed ? 'dashed' : ''
  }
  const finalClassName = composeClassNames(className ?? '', 'q-btn', customClass)
  return (
    <button className={finalClassName} {...restProps}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btype: 'primary',
  size: 's',
  dashed: false
}

export default Button