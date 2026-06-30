import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://www.petewitcher-techwriter.com',
  base: '/',

  integrations: [
    starlight({
      title: 'Pete Witcher | Senior Technical Writer and Documentation Engineer',
      sidebar: [
        { label: 'Home', link: '/' },

        // Converted to flat, top-level links
        { label: 'Writing samples', link: '/writing-samples/writing-samples/' },
        { label: 'Skill examples', link: '/skill-examples/skill-examples-overview/' },
      ],
    }),
  ],
});