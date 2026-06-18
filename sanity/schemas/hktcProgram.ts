export default {
  name: 'hktcProgram',
  title: 'HKTC Programme',
  type: 'document',
  fields: [
    { name: 'name', title: 'Programme Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'level', title: 'Academic Level', type: 'string', options: { list: ['Foundation', 'Advanced', 'Scholar', 'Master'].map(l => ({ title: l, value: l })) }},
    { name: 'duration', title: 'Duration', type: 'string' },
    { name: 'campus', title: 'Campus', type: 'string', options: { list: [{ title: 'HKTC Nairobi', value: 'nairobi' }, { title: 'HKTC Juja', value: 'juja' }] }},
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'curriculum', title: 'Curriculum Overview', type: 'array', of: [{ type: 'string' }] },
    { name: 'prerequisites', title: 'Prerequisites', type: 'text' },
    { name: 'applicationOpen', title: 'Applications Currently Open', type: 'boolean', initialValue: false },
    { name: 'nextIntake', title: 'Next Intake Date', type: 'date' },
  ],
  preview: { select: { title: 'name', subtitle: 'campus' } },
}
