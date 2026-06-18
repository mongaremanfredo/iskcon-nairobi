export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'tag', title: 'Category Tag', type: 'string' },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 },
    { name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, fields: [
      { name: 'alt', title: 'Alt Text', type: 'string' },
      { name: 'caption', title: 'Caption', type: 'string' },
    ]},
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'reference', to: [{ type: 'galleryImage' }] }] },
    { name: 'stats', title: 'Impact Statistics', type: 'array', of: [{
      type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]
    }]},
    { name: 'active', title: 'Active Project', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'seo', title: 'SEO', type: 'object', fields: [
      { name: 'metaTitle', type: 'string', title: 'Meta Title' },
      { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 2 },
    ]},
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'tag', media: 'heroImage' } },
}
