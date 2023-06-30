import './index.css';
import { ButtonHTMLAttributes } from 'react';
type ButtonKind = 'primary' | 'warn' | 'error';
type ButtonSize = 's' | 'm' | 'l';
interface ButtonPropsBase {
    kind: ButtonKind;
    size: ButtonSize;
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>;
export declare function Button({ kind, size, children, ...rest }: ButtonProps): JSX.Element;
export default Button;
