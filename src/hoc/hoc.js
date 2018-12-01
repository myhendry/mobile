import React from "react";
import { Text, View } from "react-native";

const hoc = WrappedComponent => {
  return props => {
    console.log("props ", props);
    return (
      <View>
        <Text>HOC 1</Text>
        <WrappedComponent {...props} />
      </View>
    );
  };
};

export default hoc;
