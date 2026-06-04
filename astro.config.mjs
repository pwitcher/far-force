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
          label: 'Writing samples',
          autogenerate: { directory: 'writing-samples' },
        },
        {
          label: 'Skill examples',
          items: [
            { label: 'Overview', link: '/skill-examples/skill-examples-overview/' },
          ],
        },
        {
          label: 'API documentation sample',
          items: [
            {
              label: 'Overview', link: '/api-docs/'
            },
            {
              label: 'View source (GitHub)',
              link: 'https://github.com/pwitcher/songlistApi'
            },
            {
              label: 'All songs',
              link: '/api-docs/operations/getallsongs/'
            },
            {
              label: 'Find by title',
              link: '/api-docs/operations/getsongbytitle/'
            },
            {
              label: 'Advanced search',
              link: '/api-docs/operations/searchsongs/'
            },
          ],
        },
      ],
    }),
  ],
});