import React, { Component } from "react";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./src/redux/store/configureStore";

const store = configureStore();

// Firebase
import "./src/config/firebaseApp";

// React Navigation
import AppNavigator from "./src/react-navigation/AppNavigator";

// Utilities
import { Toast } from "react-native-redux-toast";

// Apollo-Graphql
import { ApolloProvider } from "react-apollo";

import NavigationService from "./src/react-navigation/NavigationService";
import MyProvider from "./src/context/MyProvider";
import { client } from "./apollo";

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
            <AppNavigator
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <Toast messageStyle={{ color: "white" }} />
          </MyProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
