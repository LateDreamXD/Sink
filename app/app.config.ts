export default defineAppConfig({
  title: '遗失的梦想',
  description: 'Link Shortener powered by Sink',
  github: 'https://github.com/miantiao-me/Sink',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
