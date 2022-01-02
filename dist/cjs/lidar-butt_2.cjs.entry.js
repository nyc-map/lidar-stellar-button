'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-005d256c.js');

const lidarButtCss = ":host{display:block}";

let LidarButt = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null, index.h("span", null, "hello"))));
  }
};
LidarButt.style = lidarButtCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.lidar_butt = LidarButt;
exports.my_component = MyComponent;
