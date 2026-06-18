export default {
  name: 'blogPost',
  title: 'Blog / Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'category', title: 'Category', type: 'string', options: { list: [
      'Temple News', 'Philosophy', 'Farm Updates', 'Food For Life', 'Festival Reports', 'Student Stories', 'Community'
    ].map(c => ({ title: c, value: c.toLowerCase().replace(/ /g, '-') }))}},
    { name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true }, fields: [
      { name: 'alt', type: 'string', title: 'Alt Text' },
      { name: 'caption', type: 'string', title: 'Caption' },
    ]},
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 },
    { name: 'body', title: 'Body', type: 'array', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true }, fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
        { name: 'caption', type: 'string', title: 'Caption' },
      ]},
    ]},
    { name: 'featured', title: 'Featured Post', type: 'boolean', initialValue: false },
    { name: 'seo', title: 'SEO', type: 'object', fields: [
      { name: 'metaTitle', type: 'string', title: 'Meta Title' },
      { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 2 },
    ]},
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'featuredImage' } },
}
