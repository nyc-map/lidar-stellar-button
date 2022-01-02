import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const lidarButtCss = ":host{display:block}";

let LidarButt$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null, h("span", null, "hello"))));
  }
  static get style() { return lidarButtCss; }
};
LidarButt$1 = /*@__PURE__*/ proxyCustomElement(LidarButt$1, [1, "lidar-butt"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["lidar-butt"];
  components.forEach(tagName => { switch (tagName) {
    case "lidar-butt":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LidarButt$1);
      }
      break;
  } });
}

const LidarButt = LidarButt$1;
const defineCustomElement = defineCustomElement$1;

export { LidarButt, defineCustomElement };
