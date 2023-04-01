import React, { FC, ReactNode } from 'react'
export type theme = 'dark' | 'light'

interface ThemeProps {
  children: ReactNode
  theme: theme
}

export const ThemeContext = React.createContext('')

const ThemeProvider: FC<ThemeProps> = ({ children, theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
