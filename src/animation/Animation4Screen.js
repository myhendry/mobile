import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Spring, animated } from "react-spring/dist/native";

const styles = {
  flex: 1,
  margin: 0,
  borderRadius: 35,
  backgroundColor: "red",
  alignItems: "center",
  justifyContent: "center"
};

const AnimatedView = animated(View);

class Animation4Screen extends React.Component {
  state = { flag: true };
  toggle = () => this.setState(state => ({ flag: !state.flag }));
  render() {
    const { flag } = this.state;
    return (
      <Spring
        native
        from={{ margin: 0, rotate: 0 }}
        to={{
          margin: flag ? 100 : 0,
          backgroundColor: flag ? "green" : "rgba(0,0,0,0.1)",
          scale: flag ? 1 : 1.5
        }}
        config={{ tension: 10, friction: 2 }}
      >
        {({ scale, ...props }) => (
          <TouchableWithoutFeedback onPressIn={this.toggle}>
            <AnimatedView
              style={{ ...styles, ...props, transform: [{ scale }] }}
            >
              <Text>It's working!!!!</Text>
            </AnimatedView>
          </TouchableWithoutFeedback>
        )}
      </Spring>
    );
  }
}

export default Animation4Screen;
