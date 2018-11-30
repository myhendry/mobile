import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

class Firestore2Screen extends Component {
  state = {
    name: "",
    country: "Taiwan",
    description: "",
    size: "medium"
  };

  _handleSubmit = () => {
    const { name, country, description, size } = this.state;

    console.log(name, country, description, size);
  };

  render() {
    return (
      <View>
        <Text> Firestore 2 </Text>
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

export default Firestore2Screen;
