import React, { Component } from "react";
import { Text, TextInput, Button, View } from "react-native";

import { fb } from "../config/firebaseApp";

class Firebase2Screen extends Component {
  state = {
    name: "",
    friend: true
  };

  _handleSubmit = () => {
    const { name, friend } = this.state;
    fb.database()
      .ref(`friends`)
      .push({ name, friend });
    this.props.navigation.navigate("FB");
  };

  render() {
    return (
      <View>
        <Text> Firebase 2 </Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Name"
          onChangeText={name => this.setState({ name })}
        />
        <Button title="Submit" onPress={this._handleSubmit} />
      </View>
    );
  }
}

export default Firebase2Screen;
