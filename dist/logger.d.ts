export default class Logger {
    static enabled: boolean;
    static log(...datas: any[]): void;
    static warn(...datas: any[]): void;
    static error(...datas: any[]): void;
}
