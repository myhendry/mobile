import React from "react";
import { StyleSheet, Text, View } from "react-native";

import User from "../conditional/User";
import Admin from "../conditional/Admin";
import { withContext } from "../context/withContext";

class MainScreen extends React.Component {
  componentDidMount() {
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

export default withContext(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
