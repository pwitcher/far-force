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
            { 
              label: 'Overview', link: '/api-docs/' 
            },
            { 
              label: 'View Source (GitHub)', 
              link: 'https://github.com/pwitcher/songlistApi' 
            },
            { 
              label: 'All Songs', 
              link: '/api-docs/operations/getallsongs/' 
            },
            { 
              label: 'Find by Title', 
              link: '/api-docs/operations/getsongbytitle/' 
            },
            { 
              label: 'Advanced Search', 
              link: '/api-docs/operations/searchsongs/' 
            },
          ],
        },
      ],
    }),
  ],
});