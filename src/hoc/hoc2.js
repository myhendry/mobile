import React from "react";
import { Text, View } from "react-native";

const hoc2 = WrappedComponent => {
  return props => {
    console.log("props ", props);
    return (
      <View>
        <Text>HOC 2</Text>
        <WrappedComponent {...props} />
      </View>
    );
  };
};

export default hoc2;
