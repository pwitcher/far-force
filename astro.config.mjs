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
            base: 'api-docs',
            label: 'Songbook API',
            schema: './openapi.yaml', 
          },
        ]),
      ],
      sidebar: [
        { label: 'Home', link: '/' },
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
            { label: 'Overview', link: '/api-docs/' },
            { label: 'All Songs', link: '/api-docs/operations/getallsongs/' },
            { label: 'Search', link: '/api-docs/operations/searchsongs/' },
          ],
        },
      ],
    }),
  ],
});