export default {
  name: 'leadership',
  title: 'Leadership',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name & Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'role', title: 'Role / Position', type: 'string', validation: (R: any) => R.required() },
    { name: 'shortBio', title: 'Short Biography', type: 'text', rows: 3 },
    { name: 'fullBio', title: 'Full Biography', type: 'array', of: [{ type: 'block' }] },
    { name: 'portrait', title: 'Portrait Photo', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'active', title: 'Currently Active', type: 'boolean', initialValue: true },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'role', media: 'portrait' } },
}
