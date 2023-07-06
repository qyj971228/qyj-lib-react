import './index.css';
import { ButtonHTMLAttributes } from 'react';
export declare const BUTTON_KIND: string[];
export declare const SELECTIVITY: string[];
type ButtonKind = 'normal' | 'warn' | 'error';
type ButtonSize = 's' | 'm' | 'l';
export type ButtonWeight = 'primary';
interface ButtonPropsBase {
    kind: ButtonKind;
    size: ButtonSize;
    round: boolean;
    dashed: boolean;
    ghost: boolean;
    weight: ButtonWeight;
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>;
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
