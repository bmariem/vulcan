import { addGraphQLResolvers, addGraphQLMutation, updateMutator } from 'meteor/vulcan:core';
import Persons from '../modules/collection.js';

// wait for x ms before moving on
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const markAsSelected = {
  Mutation: {
    async markAsSelected(root, { personId }, context) {
      // add a 2s delay to simulate a slower operation
      await sleep(2000);

      const result = await updateMutator({
        collection: Persons,
        documentId: personId,
        data: { isSelected: true },
        context,
      });
      return result.data;
    },
  },
};

addGraphQLResolvers(markAsSelected);
addGraphQLMutation(`markAsSelected(personId: String): Person`);
