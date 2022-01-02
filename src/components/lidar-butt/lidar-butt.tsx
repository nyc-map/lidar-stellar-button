import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lidar-butt',
  styleUrl: 'lidar-butt.css',
  shadow: true,
})
export class LidarButt {

  render() {
    return (

      <Host>
        <slot>

          <span>hello</span>
        </slot>
      </Host>
    );
  }

}
