import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Persons from '../../modules/collection';

const PersonAdd = () => (
  <div className="layout">
    <div className="persons-new">
      <h1>Registration Form</h1>
      <Components.SmartForm collection={Persons} mutationFragmentName="PersonFragment" />
    </div>
  </div>
);

export default PersonAdd;
