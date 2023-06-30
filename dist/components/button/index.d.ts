import './index.css';
import { ButtonHTMLAttributes } from 'react';
type ButtonKind = 'primary' | 'warn' | 'error';
type ButtonSize = 's' | 'm' | 'l';
type ButtonMode = 'fill' | 'dashed' | 'ghost';
interface ButtonPropsBase {
    kind: ButtonKind;
    size: ButtonSize;
    round: boolean;
    mode: ButtonMode;
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>;
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
