declare class Com {
    constructor(prefix: string, styleConnector?: string);
    _: string;
    prefix: string;
    styleConnector: string;
    classList: string[];
    pushStyle(params: string): void;
    className(): string;
}
export default Com;
