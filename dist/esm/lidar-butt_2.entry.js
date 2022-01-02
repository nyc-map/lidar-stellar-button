import { r as registerInstance, h, H as Host } from './index-629fa577.js';

const lidarButtCss = ":host{display:block}";

let LidarButt = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null, h("span", null, "hello"))));
  }
};
LidarButt.style = lidarButtCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { LidarButt as lidar_butt, MyComponent as my_component };
