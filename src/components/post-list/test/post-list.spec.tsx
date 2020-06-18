import { newSpecPage } from '@stencil/core/testing';
import { PostList } from './post-list';

describe('post-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostList],
      html: `<post-list></post-list>`,
    });
    expect(page.root).toEqualHtml(`
      <post-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-list>
    `);
  });
});
