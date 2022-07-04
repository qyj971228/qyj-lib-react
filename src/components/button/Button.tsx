import React, { ButtonHTMLAttributes, FC, ReactNode, useContext } from "react";
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

type ButtonProps = Partial<NativeButtonProps>  // Partial: 为所有属性追加 undefined 类型

const Button: FC<ButtonProps> = (props) => {

  const themeProvide =  useContext(ThemeContext)

  const { 
    className,
    children,
    size,
    btype,
    theme,
    dashed,
    ...restProps 
  } = props

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

export default Button