import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { graphql, withApollo } from "react-apollo";
import gql from "graphql-tag";

import User from "../conditional/User";
import Admin from "../conditional/Admin";
import { withContext } from "../context/withContext";

class MainScreen extends React.Component {
  _getUserInfo = async () => {
    const user = await this.props.client.query({ query: ME_QUERY });
    console.log("Main User ", user);
  };

  componentDidMount() {
    this._getUserInfo();
    this.props.context.listGlobalFriends();
  }

  render() {
    let main = null;

    if (this.props.context.state.fbBool) {
      main = <User />;
    } else {
      main = <Admin />;
    }

    return <View>{main}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const ME_QUERY = gql`
  {
    me {
      id
      name
      email
      age
    }
  }
`;

export default withApollo(withContext(MainScreen));
