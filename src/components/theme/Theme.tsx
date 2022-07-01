import React, { FC, ReactNode } from "react";
export type theme = 'dark' | 'light'

interface themePropsBase {
  children?: ReactNode,
  theme?: theme
}

type ThemeProps = Partial<themePropsBase> 

const ThemeProvider: FC<ThemeProps> = ({children, theme}) => {
  return (
    <div>
      {
        React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null  // 判断children是否是节点元素
          const childProps = {...child.props, theme}
          return React.cloneElement(child, childProps)  // 为新节点追加props 
        })
      }
    </div>
  )
}

ThemeProvider.defaultProps = {
  theme: 'light'
}

export default ThemeProvider;