/*

The main Users collection definition file.

*/

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

let Persons = createCollection({
  collectionName: 'Condinates',

  typeName: 'Person',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests'],
    canDelete: ['guests'],
  },
});

export default Persons;
