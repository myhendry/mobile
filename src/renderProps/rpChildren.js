import React from "react";

class rpChildren extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children } = this.props;

    return children({
      title: "Render Props Pattern using Children",
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default rpChildren;
