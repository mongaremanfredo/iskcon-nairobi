export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (R: any) => R.required() },
    { name: 'caption', title: 'Caption', type: 'string' },
    { name: 'credit', title: 'Photographer Credit', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'category', title: 'Category', type: 'string', options: { list: [
      { title: 'Temple Life', value: 'temple-life' },
      { title: 'Festivals', value: 'festivals' },
      { title: 'Farm & Goshala', value: 'farm' },
      { title: 'Food For Life', value: 'food-for-life' },
      { title: 'HKTC', value: 'hktc' },
      { title: 'Kirtan Safari', value: 'kirtan-safari' },
      { title: 'Community', value: 'community' },
    ]}},
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'dateTaken', title: 'Date Taken', type: 'date' },
  ],
  preview: { select: { title: 'title', media: 'image', subtitle: 'category' } },
}
