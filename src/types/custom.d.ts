/**
 * @file 声明文件，用于声明各种图片格式模块
 * @module 图片格式声明
 * @description 为各种图片格式文件（.png、.jpg、.jpeg、.gif、.svg）声明模块，便于在 TypeScript 项目中导入这些文件
 */

/**
 * 声明 .png 图片模块
 * @module png
 * @description 声明 .png 图片文件模块
 */
declare module '*.png' {
  const value: string;
  export default value;
}

/**
 * 声明 .jpg 图片模块
 * @module jpg
 * @description 声明 .jpg 图片文件模块
 */
declare module '*.jpg' {
  const value: string;
  export default value;
}

/**
 * 声明 .jpeg 图片模块
 * @module jpeg
 * @description 声明 .jpeg 图片文件模块
 */
declare module '*.jpeg' {
  const value: string;
  export default value;
}

/**
 * 声明 .gif 图片模块
 * @module gif
 * @description 声明 .gif 图片文件模块
 */
declare module '*.gif' {
  const value: string;
  export default value;
}

/**
 * 声明 .svg 图片模块
 * @module svg
 * @description 声明 .svg 图片文件模块
 */
declare module '*.svg' {
  const value: string;
  export default value;
}
