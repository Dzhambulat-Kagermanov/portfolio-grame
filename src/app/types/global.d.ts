declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.woff'
declare module '*.otf'
declare module '*.ttf'
declare const __IS_DEV__: boolean
