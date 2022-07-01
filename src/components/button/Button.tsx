import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from "react";
import { theme } from '../theme/Theme'

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
  const finalClassName = `
    ${className ?? ''} ${size} ${btype} ${btype}-${theme} ${dashed ? 'dashed' : ''}
  `
  return (
    <button className={finalClassName} {...restProps}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btype: 'primary',
  size: 's',
  theme: 'light',
  dashed: false
}

export default Button