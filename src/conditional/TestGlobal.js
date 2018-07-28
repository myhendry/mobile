import React, { Component } from "react";
import { Text, View } from "react-native";

import User from "./User";
import Admin from "./Admin";
import { withContext } from "../context/withContext";

class Test2 extends Component {
  componentDidMount() {
    this.props.context.listGlobalFriends();
  }

  render() {
    if (this.props.context.state.fbBool) {
      return <User />;
    }
    return <Admin />;
  }
}

export default withContext(Test2);
