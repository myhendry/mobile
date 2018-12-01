import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

class AnimationScreen extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Anime1")}
        >
          <Text> Animation 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Anime2")}
        >
          <Text> Animation 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Anime3")}
        >
          <Text> Animation 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Anime4")}
        >
          <Text> Animation 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Anime5")}
        >
          <Text> Animation 5</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AnimationScreen;
