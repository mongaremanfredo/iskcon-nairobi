export default {
  name: 'guestRoom',
  title: 'Guest Room',
  type: 'document',
  fields: [
    { name: 'name', title: 'Room Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'priceKES', title: 'Price per Night (KES)', type: 'number' },
    { name: 'priceUSD', title: 'Price per Night (USD)', type: 'number' },
    { name: 'capacity', title: 'Capacity', type: 'string' },
    { name: 'amenities', title: 'Amenities', type: 'array', of: [{ type: 'string' }] },
    { name: 'images', title: 'Room Images', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [
      { name: 'alt', type: 'string', title: 'Alt Text' },
      { name: 'caption', type: 'string', title: 'Caption' },
    ]}]},
    { name: 'available', title: 'Available for Booking', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: { select: { title: 'name', subtitle: 'priceKES', media: 'images.0' } },
}
