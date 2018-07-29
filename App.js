import React, { Component } from "react";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./src/redux/store/configureStore";

const store = configureStore();

// Firebase
import "./src/config/firebaseApp";

// React Navigation
import Drawer from "./src/react-navigation/Navigation";

// Utilities
import { Toast } from "react-native-redux-toast";

// Apollo-Graphql
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import MyProvider from "./src/context/MyProvider";

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
        <Provider store={store}>
          <MyProvider>
            <Drawer />
            <Toast messageStyle={{ color: "white" }} />
          </MyProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
