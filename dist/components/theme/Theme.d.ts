import { FC, ReactNode } from "react";
export declare type theme = 'dark' | 'light';
interface themePropsBase {
    children?: ReactNode;
    theme?: theme;
}
declare type ThemeProps = Partial<themePropsBase>;
declare const ThemeProvider: FC<ThemeProps>;
export default ThemeProvider;
