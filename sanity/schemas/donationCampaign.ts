export default {
  name: 'donationCampaign',
  title: 'Donation Campaign',
  type: 'document',
  fields: [
    { name: 'title', title: 'Campaign Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', title: 'Category', type: 'string', options: { list: [
      'Temple Worship', 'Food For Life', 'Cow Protection', 'Student Sponsorship', 'Festival', 'General'
    ].map(c => ({ title: c, value: c }))}},
    { name: 'goal', title: 'Fundraising Goal (KES)', type: 'number' },
    { name: 'raised', title: 'Amount Raised (KES)', type: 'number' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'image', title: 'Campaign Image', type: 'image', options: { hotspot: true } },
    { name: 'active', title: 'Active Campaign', type: 'boolean', initialValue: true },
    { name: 'startDate', title: 'Start Date', type: 'date' },
    { name: 'endDate', title: 'End Date', type: 'date' },
    { name: 'mpesaPaybill', title: 'M-PESA Paybill Number', type: 'string' },
    { name: 'mpesaAccount', title: 'M-PESA Account Code', type: 'string' },
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
}
