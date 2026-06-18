export default {
  name: 'foodForLifeReport',
  title: 'Food For Life Report',
  type: 'document',
  fields: [
    { name: 'title', title: 'Report Title', type: 'string' },
    { name: 'period', title: 'Reporting Period', type: 'string' },
    { name: 'mealsDistributed', title: 'Meals Distributed', type: 'number' },
    { name: 'distributionPoints', title: 'Distribution Points', type: 'number' },
    { name: 'volunteersEngaged', title: 'Volunteers Engaged', type: 'number' },
    { name: 'locations', title: 'Distribution Locations', type: 'array', of: [{ type: 'string' }] },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'photos', title: 'Photos', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'date', title: 'Report Date', type: 'date' },
  ],
  preview: { select: { title: 'title', subtitle: 'period' } },
}
