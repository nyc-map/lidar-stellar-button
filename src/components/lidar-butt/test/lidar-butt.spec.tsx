import { newSpecPage } from '@stencil/core/testing';
import { LidarButt } from '../lidar-butt';

describe('lidar-butt', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LidarButt],
      html: `<lidar-butt></lidar-butt>`,
    });
    expect(page.root).toEqualHtml(`
      <lidar-butt>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lidar-butt>
    `);
  });
});
