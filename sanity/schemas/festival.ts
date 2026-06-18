export default {
  name: 'festival',
  title: 'Festival',
  type: 'document',
  fields: [
    { name: 'title', title: 'Festival Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'date', title: 'Festival Date', type: 'datetime', validation: (R: any) => R.required() },
    { name: 'endDate', title: 'End Date (if multi-day)', type: 'datetime' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, fields: [
      { name: 'alt', title: 'Alt Text', type: 'string' },
      { name: 'caption', title: 'Caption', type: 'string' },
      { name: 'credit', title: 'Photographer Credit', type: 'string' },
    ]},
    { name: 'shortDescription', title: 'Short Description (for cards)', type: 'text', rows: 2 },
    { name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'schedule', title: 'Programme Schedule', type: 'array', of: [{
      type: 'object', fields: [
        { name: 'time', title: 'Time', type: 'string' },
        { name: 'event', title: 'Event', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]
    }]},
    { name: 'gallery', title: 'Gallery Images', type: 'array', of: [{ type: 'reference', to: [{ type: 'galleryImage' }] }] },
    { name: 'registrationUrl', title: 'Registration URL', type: 'url' },
    { name: 'donationCampaign', title: 'Linked Donation Campaign', type: 'reference', to: [{ type: 'donationCampaign' }] },
    { name: 'livestreamUrl', title: 'Livestream URL', type: 'url' },
    { name: 'seo', title: 'SEO', type: 'object', fields: [
      { name: 'metaTitle', type: 'string', title: 'Meta Title' },
      { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 2 },
    ]},
  ],
  preview: { select: { title: 'title', date: 'date', media: 'heroImage' } },
}
