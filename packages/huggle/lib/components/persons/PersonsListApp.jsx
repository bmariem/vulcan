import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Persons from '../../modules/collection.js';
import PersonMarkAsSelected from './PersonMarkAsSelected.jsx';

const PersonsListApp = () => (
  <div className="layout">
    <div className="app-content">
      <div className="persons-app">
        <Components.Datatable
          collection={Persons}
          columns={['firstName', 'lastName', 'age', { name: 'isSelected', component: PersonMarkAsSelected }]}
          options={{ input: { sort: { firstName: 'asc' } } }}
          showSearch={false}
          showEdit={false}
        />
      </div>
    </div>
  </div>
);

export default PersonsListApp;
