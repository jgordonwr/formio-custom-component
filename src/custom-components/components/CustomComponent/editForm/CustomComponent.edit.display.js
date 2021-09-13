export default [
  {
    key: 'labelPosition',
    ignore: true
  },
  {
    key: 'placeholder',
    ignore: true
  },
  {
    key: 'description',
    ignore: true
  },
  {
    key: 'hideLabel',
    ignore: true
  },
  {
    key: 'autofocus',
    ignore: true
  },
  {
    key: 'tooltip',
    ignore: true
  },
  {
    key: 'tabindex',
    ignore: true
  },
  {
    key: 'disabled',
    ignore: true
  },
  {
    type: 'number',
    label: 'JSON dummy data id',
    key: 'jsonId',
    input: true,
    weight: 1,
    placeholder: 'ID to fetch',
    tooltip: 'JSON dummy data id to fetch'
  },
  {
    type: 'checkbox',
    label: 'Clone Row Components',
    key: 'cloneRows',
    input: true,
    weight: 3,
    tooltip: 'Check this if you would like to "clone" the first row of components to all additional empty rows of the table.'
  },
  {
    type: 'select',
    label: 'Cell Alignment',
    key: 'cellAlignment',
    input: true,
    tooltip: 'Horizontal alignment for cells of the table.',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' }
      ]
    },
    defaultValue: 'left',
    weight: 3
  },
  {
    type: 'checkbox',
    label: 'Striped',
    key: 'striped',
    tooltip: 'This will stripe the table if checked.',
    input: true,
    weight: 701
  },
  {
    type: 'checkbox',
    label: 'Bordered',
    key: 'bordered',
    input: true,
    tooltip: 'This will border the table if checked.',
    weight: 702
  },
  {
    type: 'checkbox',
    label: 'Hover',
    key: 'hover',
    input: true,
    tooltip: 'Highlight a row on hover.',
    weight: 703
  },
  {
    type: 'checkbox',
    label: 'Condensed',
    key: 'condensed',
    input: true,
    tooltip: 'Condense the size of the table.',
    weight: 704
  },
];
