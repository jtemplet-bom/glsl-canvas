import IterableStringMap from './iterable';
import Subscriber from './subscriber';
export declare const TextureImageExtensions: string[];
export declare const TextureVideoExtensions: string[];
export declare const TextureExtensions: string[];
declare enum TextureSourceType {
    Data = 0,
    Element = 1,
    Url = 2
}
declare enum TextureFilteringType {
    MipMap = "mipmap",
    Linear = "linear",
    Nearest = "nearest"
}
export declare class TextureInput {
    key: string;
    url: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | TextureData;
    options?: TextureOptions;
}
export declare class TextureData {
    data: Uint8Array;
    width: number;
    height: number;
}
export declare class TextureOptions {
    url?: string;
    element?: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLElement | Element;
    data?: Uint8Array;
    width?: number;
    height?: number;
    filtering?: TextureFilteringType;
    repeat?: boolean;
    UNPACK_FLIP_Y_WEBGL?: boolean;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL?: number;
    TEXTURE_WRAP_S?: number;
    TEXTURE_WRAP_T?: number;
}
export declare class Texture extends Subscriber {
    key: string;
    index: number;
    options: TextureOptions;
    workpath: string;
    width: number;
    height: number;
    texture: WebGLTexture;
    source: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | Uint8Array;
    sourceType: TextureSourceType;
    filtering: TextureFilteringType;
    url: string;
    valid: boolean;
    dirty: boolean;
    animated: boolean;
    powerOf2: boolean;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, key: string, index: number, options?: TextureOptions, workpath?: string);
    static isPowerOf2(value: number): boolean;
    static isSafari(): boolean;
    static isTextureUrl(text: string): boolean;
    static isTexture(urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | TextureData): boolean;
    static getMaxTextureSize(gl: WebGLRenderingContext | WebGL2RenderingContext): number;
    static getTextureOptions(urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | TextureData, options?: TextureOptions): TextureOptions;
    create(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    load(gl: WebGLRenderingContext | WebGL2RenderingContext, options?: TextureOptions): Promise<Texture>;
    setUrl(gl: WebGLRenderingContext | WebGL2RenderingContext, url: string, options?: TextureOptions): Promise<Texture>;
    setElement(gl: WebGLRenderingContext | WebGL2RenderingContext, element: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLElement | Element, options?: TextureOptions): Promise<Texture>;
    setData(gl: WebGLRenderingContext | WebGL2RenderingContext, width: number, height: number, data: Uint8Array, options?: TextureOptions): Promise<Texture>;
    update(gl: WebGLRenderingContext | WebGL2RenderingContext, options: TextureOptions): void;
    tryUpdate(gl: WebGLRenderingContext | WebGL2RenderingContext): boolean;
    destroy(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    setFiltering(gl: WebGLRenderingContext | WebGL2RenderingContext, options: TextureOptions): void;
}
export default class Textures extends IterableStringMap<Texture> {
    count: number;
    dirty: boolean;
    animated: boolean;
    clean(): void;
    createOrUpdate(gl: WebGLRenderingContext | WebGL2RenderingContext, key: string, urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | TextureData, index: number, options: TextureOptions, workpath: string): Promise<Texture>;
}
export {};
