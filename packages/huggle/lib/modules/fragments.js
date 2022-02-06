import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment PersonFragment on Person {
    _id
    firstName
    lastName
    age
    isSelected
  }
`);
