const schema = {
  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },

  firstName: {
    label: 'First Name',
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    searchable: true,
  },

  lastName: {
    label: 'Last Name',
    type: String,
    optional: false,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    searchable: true,
  },

  age: {
    label: 'Age',
    type: Number,
    optional: false,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    searchable: true,
    min: 0,
    max: 120,
  },

  isSelected: {
    label: 'is Selected ?',
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    hidden: true,
  },
};

export default schema;
