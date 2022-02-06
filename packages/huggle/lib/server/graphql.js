import { GraphQLSchema, addGraphQLResolvers, addGraphQLQuery, addGraphQLSchema } from 'meteor/vulcan:core';
/*

SchemaContents resolver

Used to output the GraphQL schema as a string

*/
const schemaResolvers = {
  Query: {
    schemaContents(root, args, context) {
      return GraphQLSchema.finalSchema[0];
    },
  },
};
addGraphQLResolvers(schemaResolvers);

addGraphQLQuery(`schemaContents: String`);

/*

PersonsCount resolver

*/
import Persons from '../modules/collection.js';

const PersonsCountResolvers = {
  Query: {
    PersonsCount(root, args, context) {
      return Persons && Persons.find().count();
    },
  },
};
addGraphQLResolvers(PersonsCountResolvers);

addGraphQLQuery(`PersonsCount: Int`);
