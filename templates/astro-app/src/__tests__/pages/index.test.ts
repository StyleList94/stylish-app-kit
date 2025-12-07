import { experimental_AstroContainer as AstroContainer } from 'astro/container';

import IndexPageComponent from '../../pages/index.astro';

describe('Index Page', () => {
  test('renders main page content correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(
      IndexPageComponent as unknown as Parameters<
        typeof container.renderToString
      >[0],
    );

    expect(result).toContain('⭐');
    expect(result).toContain('Stylish Astro');
    expect(result).toContain('Create stylish app that shine like stars');
  });
});
