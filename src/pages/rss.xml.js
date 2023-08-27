import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'ＣＨＩＮ　ＢＬＯＧ',
    description: 'My journey learning Astro',
    site: 'https://chinblog.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}   