import { newE2EPage } from '@stencil/core/testing';

describe('lidar-butt', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lidar-butt></lidar-butt>');

    const element = await page.find('lidar-butt');
    expect(element).toHaveClass('hydrated');
  });
});
