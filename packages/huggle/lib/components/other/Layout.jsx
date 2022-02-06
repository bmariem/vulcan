import React from 'react';
import { replaceComponent, registerComponent } from 'meteor/vulcan:core';
import PersonsListApp from '../persons/PersonsListApp';

// replace PersonsApp with PersonsListApp on #Step15
const Layout = () => (
  <div className="layout">
    <PersonsListApp />
  </div>
);

replaceComponent('Layout', Layout);

export default Layout;
