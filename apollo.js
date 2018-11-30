import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";
import gql from "graphql-tag";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const defaultState = {
  currentGame: {
    __typename: "currentGame",
    teamAScore: 0,
    teamBScore: 0,
    teamAName: "EAGLES",
    teamBName: "LOL"
  }
};

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateGame: (_, { index, value }, { cache }) => {
        const query = gql`
          query GetCurrentGame {
            currentGame @client {
              teamAScore
              teamBScore
              teamAName
              teamBName
            }
          }
        `;
        const previous = cache.readQuery({ query });
        const data = {
          currentGame: {
            ...previous.currentGame,
            [index]: value
          }
        };
        cache.writeQuery({ query, data });
        return null;
      },
      resetCurrentGame: (_, d, { cache }) => {
        cache.writeData({ data: defaultState });
      }
    }
  }
});

const host = "http://localhost:4000/graphql";
const httpLink = createUploadLink({
  uri: host,
  credentials: "same-origin"
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    stateLink,
    httpLink
  ]),
  cache
});
