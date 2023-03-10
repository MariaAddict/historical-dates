declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
  }
  
  declare module '*.json' {
    const content: Record<string, string>;
    export default content;
  }
  
  declare const IS_PROD: boolean;
  declare const IS_DEV: boolean;
  declare const IS_DEV_SERVER: boolean;
  