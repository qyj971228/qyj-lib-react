declare class Component {
    constructor(prefix: string);
    readonly _ = "-";
    readonly prefix: string;
    readonly suffixs: string[];
    readonly classList: string[];
    setProp(prop: string): void;
    getComponentClassName(): string[];
    getClassName(className: string | undefined): string;
}
export default Component;
