import { Platform, AsyncStorage } from "react-native";
import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import { ApolloLink, split } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";
import gql from "graphql-tag";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";

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

const host =
  Platform.OS === "ios" ? "http://localhost:4000" : "http://10.0.2.2:4000";

// httpLink
const httpLink = createUploadLink({
  uri: `${host}/graphql`,
  credentials: "same-origin"
});

// authMiddleware
const authLink = setContext(async (req, { headers }) => {
  const token = await AsyncStorage.getItem("@token");

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ""
    }
  };
});

// wsLink
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const webLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, stateLink, webLink, errorLink]),
  cache
});
