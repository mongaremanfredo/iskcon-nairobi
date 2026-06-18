export default {
  name: 'templeInfo',
  title: 'Temple Information',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'name', title: 'Temple Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'address', title: 'Address', type: 'text', rows: 3 },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'openingHours', title: 'Opening Hours', type: 'string' },
    { name: 'googleMapsUrl', title: 'Google Maps URL', type: 'url' },
    { name: 'socialLinks', title: 'Social Links', type: 'object', fields: [
      { name: 'facebook', title: 'Facebook URL', type: 'url' },
      { name: 'instagram', title: 'Instagram URL', type: 'url' },
      { name: 'youtube', title: 'YouTube URL', type: 'url' },
      { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
      { name: 'whatsapp', title: 'WhatsApp Number', type: 'string' },
    ]},
    { name: 'dailySchedule', title: 'Daily Programme Schedule', type: 'array', of: [{
      type: 'object', fields: [
        { name: 'time', title: 'Time', type: 'string' },
        { name: 'programme', title: 'Programme', type: 'string' },
      ]
    }]},
    { name: 'heroVideo', title: 'Hero Video URL', type: 'url' },
    { name: 'heroImages', title: 'Hero Background Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
  ],
}
