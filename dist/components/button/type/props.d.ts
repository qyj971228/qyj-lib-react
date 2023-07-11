import { ButtonHTMLAttributes } from 'react';
type ButtonWeight = 'primary';
type ButtonKind = 'normal' | 'warn' | 'error';
type ButtonSize = 's' | 'm' | 'l';
interface ButtonPropsBase {
    kind: ButtonKind;
    size: ButtonSize;
    round: boolean;
    dashed: boolean;
    ghost: boolean;
    weight: ButtonWeight;
}
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps> & Partial<ButtonPropsBase>;
export default ButtonProps;
export declare const PREFIX = "qyj-btn";
export declare const BUTTONKIND: string[];
export declare const SELECTIVITY: string[];
export declare const ROUND = "round";
export declare const DASHED = "dashed";
export declare const GHOST = "ghost";
