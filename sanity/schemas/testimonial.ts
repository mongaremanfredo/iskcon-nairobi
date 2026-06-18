export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'role', title: 'Role / Programme', type: 'string' },
    { name: 'origin', title: 'City / Country of Origin', type: 'string' },
    { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (R: any) => R.required() },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Student', 'Volunteer', 'Visitor', 'Donor', 'Festival Attendee'].map(c => ({ title: c, value: c })) }},
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
}
