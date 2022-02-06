import { addRoute } from 'meteor/vulcan:core';
import PersonsListApp from '../components/persons/PersonsListApp';
import PersonAdd from '../components/persons/PersonAdd';

addRoute({ name: 'Default', path: '/', component: PersonAdd });
addRoute({ name: 'PersonAdd', path: '/persons/add', component: PersonAdd });
addRoute({ name: 'PersonsListApp', path: '/persons', component: PersonsListApp });
