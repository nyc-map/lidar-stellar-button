import { Component, Host, h } from '@stencil/core';
export class LidarButt {
  render() {
    return (h(Host, null,
      h("slot", null,
        h("span", null, "hello"))));
  }
  static get is() { return "lidar-butt"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lidar-butt.css"]
  }; }
  static get styleUrls() { return {
    "$": ["lidar-butt.css"]
  }; }
}
