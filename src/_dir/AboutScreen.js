import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> About </Text>
      </View>
    );
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
