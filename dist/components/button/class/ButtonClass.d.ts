import Component from "../../../class/ComponentClass";
import { ButtonPropsBase } from "../type/props";
declare class Button extends Component<ButtonPropsBase> {
    constructor(props: ButtonPropsBase);
    private setButtonWeight;
}
export default Button;
