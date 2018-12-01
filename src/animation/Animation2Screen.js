import React from "react";
import { View } from "react-native";
import { Spring, animated } from "react-spring/dist/native";

const AnimatedView = animated(View);

class Animation2Screen extends React.Component {
  render() {
    return (
      <Spring native from={{ number: 0 }} to={{ number: 1 }}>
        {props =>
          console.log(props) || (
            <AnimatedView style={props}>{props.number}</AnimatedView>
          )
        }
      </Spring>
    );
  }
}

export default Animation2Screen;
