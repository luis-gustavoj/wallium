import type * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    // Allow any CSS custom properties to be used in inline styles
    [index: `--${string}`]: any;
  }
}
