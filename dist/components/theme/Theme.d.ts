import React, { FC, ReactNode } from "react";
export declare type theme = 'dark' | 'light';
interface ThemeProps {
    children: ReactNode;
    theme?: theme;
}
export declare const ThemeContext: React.Context<string>;
declare const ThemeProvider: FC<ThemeProps>;
export default ThemeProvider;
