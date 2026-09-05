declare module "flickity" {
  interface FlickityOptions {
    [option: string]: unknown;
  }

  export default class Flickity {
    constructor(element: Element | string, options?: FlickityOptions);
    destroy(): void;
    next(isWrapped?: boolean, isInstant?: boolean): void;
    previous(isWrapped?: boolean, isInstant?: boolean): void;
    select(index: number, isWrapped?: boolean, isInstant?: boolean): void;
    resize(): void;
    reposition(): void;
    selectedIndex: number;
  }
}

declare module "flickity/css/flickity.css";
