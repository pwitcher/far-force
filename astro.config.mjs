import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI from 'starlight-openapi'; // 1. Import the plugin

export default defineConfig({
  site: 'https://www.petewitcher-techwriter.com',
  // If this repo is your "main" username repo (pwitcher.github.io), 
  // you can leave base blank or use '/'
  base: '/', 
  // ... rest of your config
  
  integrations: [
    starlight({
      title: 'Pete Witcher | Senior Technical Writer and Documentation Engineer',
      plugins: [
        // 2. Add the plugin configuration
        starlightOpenAPI([
          {
            base: 'api/songbook', // This will be the URL: /api/songbook/
            label: 'Songbook API',
            schema: 'https://api.swaggerhub.com/apis/pwitcher/SongbookApi/1.0.0/swagger.yaml', // Link to your SwaggerHub YAML
          },
        ]),
      ],
		sidebar: [
		{
			label: 'Professional Projects',
			autogenerate: { directory: 'work-history' },
		},
		{
			label: 'API Reference',
			// The 'base' you defined in the plugin config becomes the link
			items: [
			{ label: 'Songbook API', link: '/api/songbook/' }, 
			],
		},
		],
    }),
  ],
});