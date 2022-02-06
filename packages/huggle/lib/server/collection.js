import { extendCollection } from 'meteor/vulcan:core';
import Persons from '../modules/collection.js';

import { apiSchema } from './apischema.js';

extendCollection(Persons, {
  apiSchema,
});
