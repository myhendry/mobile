import React, { Component } from "react";
import { Text, View } from "react-native";

class rpRender extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { render } = this.props;
    return (
      <View>
        <Text>Render Props Pattern using Render</Text>
        {render({ on: this.state.on, toggle: this.toggle })}
      </View>
    );
  }
}

export default rpRender;
