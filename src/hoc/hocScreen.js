import React, { Component } from "react";
import { Text, View } from "react-native";

import hoc from "./hoc";
import hoc2 from "./hoc2";

class hocScreen extends Component {
  render() {
    return (
      <View>
        <Text> hocScreen </Text>
      </View>
    );
  }
}

export default hoc2(hoc(hocScreen));
