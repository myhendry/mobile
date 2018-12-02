import React, { Component } from "react";
import { Text, View } from "react-native";

window.navigator.userAgent = "react-native";
import io from "socket.io-client/dist/socket.io";

class SocketScreen extends Component {
  state = {
    name: "Hendry"
  };

  constructor() {
    super();

    this.socket = io("localhost:4000", { jsonp: false });
    this.socket.on("update", () => this.setState({ name: "Hey" }));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> SocketScreen </Text>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

export default SocketScreen;
