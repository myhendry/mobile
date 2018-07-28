import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { MyContext } from "./MyProvider";

class ContextScreen extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ state: { name, country, age }, addAge }) => (
          <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{country}</Text>
            <Text>{age}</Text>
            <Button title="ADD" onPress={addAge} />
          </View>
        )}
      </MyContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ContextScreen;
