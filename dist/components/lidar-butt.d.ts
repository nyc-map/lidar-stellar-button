import type { Components, JSX } from "../types/components";

interface LidarButt extends Components.LidarButt, HTMLElement {}
export const LidarButt: {
  prototype: LidarButt;
  new (): LidarButt;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
