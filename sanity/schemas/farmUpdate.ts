export default {
  name: 'farmUpdate',
  title: 'Farm Update',
  type: 'document',
  fields: [
    { name: 'title', title: 'Update Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Goshala', 'Crops', 'Construction', 'Events', 'General'].map(c => ({ title: c, value: c })) }},
    { name: 'cowCount', title: 'Current Cow Count', type: 'number' },
    { name: 'content', title: 'Update Content', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
    { name: 'photos', title: 'Photos', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'caption', type: 'string', title: 'Caption' }] }] },
  ],
  preview: { select: { title: 'title', subtitle: 'date' } },
}
