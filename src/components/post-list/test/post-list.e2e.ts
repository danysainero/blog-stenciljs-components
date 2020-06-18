import { newE2EPage } from '@stencil/core/testing';

describe('post-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-list></post-list>');

    const element = await page.find('post-list');
    expect(element).toHaveClass('hydrated');
  });
});
