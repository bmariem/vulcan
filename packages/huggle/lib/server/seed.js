/*

Seed the database with some dummy content. 

*/

import Persons from '../modules/collection.js';
import Users from 'meteor/vulcan:users';
import { newMutation } from 'meteor/vulcan:core';
import { Promise } from 'meteor/promise';

const seedData = [
  {
    firstName: 'Jean',
    lastName: 'Doe',
    age: 23,
    isSelected: false,
  },
  {
    firstName: 'Tim',
    lastName: 'Cook',
    age: 65,
    isSelected: true,
  },
  {
    firstName: 'Mariem',
    lastName: 'Bel',
    age: 29,
    isSelected: true,
  },
  {
    firstName: 'Eric',
    lastName: 'Tommy',
    age: 35,
    isSelected: true,
  },
];

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true,
  };
  return newMutation({
    collection: Users,
    document: user,
    validate: false,
  });
};

const createDummyUsers = async () => {
  // eslint-disable-next-line no-console
  console.log('// inserting dummy users…');
  return Promise.all([
    createUser('Bruce', 'dummyuser1@telescopeapp.org'),
    createUser('Arnold', 'dummyuser2@telescopeapp.org'),
    createUser('Julia', 'dummyuser3@telescopeapp.org'),
  ]);
};

// eslint-disable-next-line no-undef
Vulcan.removeGettingStartedContent = () => {
  Users.remove({ 'profile.isDummy': true });
  // eslint-disable-next-line no-console
  console.log('// Getting started content removed');
};

Meteor.startup(() => {
  if (Users.find().fetch().length === 0) {
    Promise.await(createDummyUsers());
  }

  if (Persons.find().fetch().length === 0) {
    const allUsers = Users.find().fetch();
    // eslint-disable-next-line no-console
    console.log('// seeding Users');
    Promise.awaitAll(
      seedData.map((document) =>
        newMutation({
          collection: Persons,
          document: document,
          currentUser: _.sample(allUsers), // get a random user
          validate: false,
        })
      )
    );

    // eslint-disable-next-line no-console
    console.log('-> finished seeding!');
  }
});
