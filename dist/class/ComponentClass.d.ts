declare class Component<T extends object> {
    constructor(prefix: string, props: T, booleanProp: string[]);
    readonly _ = "-";
    readonly prefix: string;
    readonly suffixs: string[];
    readonly classList: string[];
    setProp(prop: string | undefined): void;
    setPropByBoolean(prop: boolean | undefined, val: string): void;
    setStrProps<T extends object>(props: T): void;
    setBoolProps<T>(props: T, booleanProps: string[]): void;
    getComponentClassName(): string[];
    getClassName(className: string | undefined): string;
}
export default Component;
