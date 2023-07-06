declare class Com {
    constructor(prefix: string);
    private readonly link;
    private readonly _;
    private readonly suffixs;
    private readonly classList;
    pushStyle(params: string): void;
    setWeight(weight: string): void;
    getClassName(): string;
}
export default Com;
