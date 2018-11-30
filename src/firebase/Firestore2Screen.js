import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { fs } from "../config/firebaseApp";

class Firestore2Screen extends Component {
  state = {
    name: "",
    country: "Taiwan",
    description: "",
    size: "medium"
  };

  _handleSubmit = async () => {
    const { name, country, description, size } = this.state;

    try {
      await fs
        .collection("employees")
        .add({ name, country, description, size });

      this.props.navigation.navigate("FS");
    } catch (error) {
      throw error;
    }
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
