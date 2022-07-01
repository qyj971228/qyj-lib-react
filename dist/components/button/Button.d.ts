import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from "react";
import { theme } from '../theme/Theme';
declare type buttonType = 'primary' | 'warn';
declare type buttonSize = 's' | 'm' | 'l';
declare type dashed = true | false;
interface buttonPropsBase {
    children?: ReactNode;
    btype?: buttonType;
    size?: buttonSize;
    theme?: theme;
    dashed?: dashed;
}
declare type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = buttonPropsBase & AnchorHTMLAttributes<HTMLElement>;
declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: FC<ButtonProps>;
export default Button;
