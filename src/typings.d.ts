// We need to tell TypeScript that when we write "import styles from './styles.scss'
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export = ReactComponent;
}

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.mp3";
declare module "*.mp4";
declare module "*.ttf";
declare module "buffer-layout";
