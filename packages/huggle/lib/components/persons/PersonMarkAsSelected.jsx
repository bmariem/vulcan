import React from 'react';
import { Components } from 'meteor/vulcan:core';

const PersonMarkAsSelected = ({ document: person }) =>
  person.isSelected ? (
    <span>✓</span>
  ) : (
    <Components.MutationButton
      label="✓"
      variant="primary"
      mutationOptions={{
        name: 'markAsSelected',
        args: { personId: 'String' },
        fragmentName: 'PersonFragment',
      }}
      mutationArguments={{ personId: person._id }}
    />
  );

export default PersonMarkAsSelected;
