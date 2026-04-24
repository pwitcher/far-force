import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI from 'starlight-openapi';

export default defineConfig({
  site: 'https://www.petewitcher-techwriter.com',
  base: '/',

  integrations: [
    starlight({
      title: 'Pete Witcher | Senior Technical Writer and Documentation Engineer',
      plugins: [
        starlightOpenAPI([
          {
            base: 'api/songbook',
            label: 'Songbook API',
            schema: 'https://api.swaggerhub.com/apis/pwitcher/SongbookApi/1.0.0/swagger.yaml',
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Case Studies',
          autogenerate: { directory: 'case-studies' },
        },
        {
          label: 'Writing Samples',
          autogenerate: { directory: 'writing-samples' },
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Songbook API', link: '/api/songbook/' },
          ],
        },
      ],
    }),
  ],
});
