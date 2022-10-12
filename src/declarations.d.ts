// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  const content: any;
  const viewBox: string;
  const width: string;
  const height: string;
  // eslint-disable-next-line import/export
  export default content;
  // eslint-disable-next-line import/export
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.module.scss' {
  const scssModule: { [index:string]: stirng }
  export default scssModule;
}
