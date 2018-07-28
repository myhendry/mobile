import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import MyProvider from "./src/context/MyProvider";

import "./src/firebase/firebaseApp";
import Drawer from "./src/react-navigation/Navigation";

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

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: "https://api.graph.cool/simple/v1/cje02rqk51iwi0160gb0kgx0p"
    })
  ]),
  cache
});

class App extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ["Setting a timer"];
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <MyProvider>
          <Drawer />
        </MyProvider>
      </ApolloProvider>
    );
  }
}

export default App;
