# Pete Witcher - portfolio site

This is my tech writer/documentation engineer portfolio site. I built it with the [Astro](https://astro.build) web framework and [Starlight](https://starlight.astro.build), Astro's native documentation framework. You can find writing samples [here](src\content\docs\writing-samples\writing-samples) and projects demonstrating other skills [here](src\content\docs\skill-examples\skill-examples-overview).

## CI/CD pipeline

I edit this site's Markdown files in Visual Studio Code (VSC). I commit/push/pull changes with GitHub Desktop. I set up a [GitHub Action](https://github.com/pwitcher/far-force/blob/main/.github/workflows/deploy.yml) to automatically deploy the latest version of the site after every successful commit. 
