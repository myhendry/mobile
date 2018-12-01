import React from "react";
import { View } from "react-native";
import { Spring, animated } from "react-spring/dist/native";

const AnimatedView = animated(View);

class Animation3Screen extends React.Component {
  render() {
    return (
      <Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => <AnimatedView style={props}>hello</AnimatedView>}
      </Spring>
    );
  }
}

export default Animation3Screen;
