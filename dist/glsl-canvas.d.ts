import 'promise-polyfill';
import Buffers from './buffers';
import { ContextOptions, ContextVertexBuffers } from './context';
import Logger from './logger';
import Subscriber from './subscriber';
import Textures, { TextureData, TextureInput, TextureOptions } from './textures';
import Uniforms, { IUniformOption } from './uniforms';
export interface IPoint {
    x: number;
    y: number;
}
export declare class GlslCanvasOptions extends ContextOptions {
    vertexString?: string;
    fragmentString?: string;
    backgroundColor?: string;
    workpath?: string;
    onError?: Function;
}
export declare class GlslCanvasTimer {
    start: number;
    previous: number;
    delay: number;
    current: number;
    delta: number;
    paused: boolean;
    constructor();
    now(): number;
    play(): void;
    pause(): void;
    next(): GlslCanvasTimer;
}
export default class GlslCanvas extends Subscriber {
    options: GlslCanvasOptions;
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    program: WebGLProgram;
    timer: GlslCanvasTimer;
    vertexBuffers: ContextVertexBuffers;
    rect: ClientRect | DOMRect;
    mouse: IPoint;
    uniforms: Uniforms;
    buffers: Buffers;
    textures: Textures;
    textureList: TextureInput[];
    vertexString: string;
    fragmentString: string;
    width: number;
    height: number;
    devicePixelRatio: number;
    valid: boolean;
    animated: boolean;
    dirty: boolean;
    visible: boolean;
    rafId: number;
    constructor(canvas: HTMLCanvasElement, options?: GlslCanvasOptions);
    static logger: Logger;
    static items: GlslCanvas[];
    static version(): string;
    static of(canvas: HTMLCanvasElement): GlslCanvas;
    static loadAll(): GlslCanvas[];
    private getShaders_;
    private addListeners_;
    private addCanvasListeners_;
    private removeCanvasListeners_;
    private removeListeners_;
    onScroll(e: Event): void;
    onClick(e: MouseEvent): void;
    onMove(mx: number, my: number): void;
    onMousemove(e: MouseEvent): void;
    onMouseover(e: MouseEvent): void;
    onMouseout(e: MouseEvent): void;
    onTouchmove(e: TouchEvent): void;
    onTouchend(e: TouchEvent): void;
    onTouchstart(e: TouchEvent): void;
    onLoop(time?: number): void;
    private setUniform_;
    private parseTextures_;
    private createUniforms_;
    private updateUniforms_;
    private isVisible_;
    private isAnimated_;
    private isDirty_;
    private sizeDidChanged_;
    load(fragmentString?: string, vertexString?: string): Promise<boolean>;
    getContext_(): WebGLRenderingContext | WebGL2RenderingContext;
    createContext_(): boolean;
    test(fragmentString?: string, vertexString?: string): Promise<any>;
    destroyContext_(): void;
    swapCanvas_(): void;
    destroy(): void;
    loadTexture(key: string, urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | TextureData, options?: TextureOptions): void;
    setTexture(key: string, urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | TextureData, options?: TextureOptions): void;
    setUniform(key: string, ...values: any[]): void;
    setUniformOfInt(key: string, values: any[]): void;
    setUniforms(values: IUniformOption): void;
    pause(): void;
    play(): void;
    toggle(): void;
    checkRender(): void;
    render(): void;
}
declare global {
    interface Window {
        GlslCanvas: any;
    }
}
