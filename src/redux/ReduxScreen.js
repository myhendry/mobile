import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { incrementCounter, decrementCounter } from "./actions/index";

class ReduxScreen extends Component {
  _displayInfoToast = () => {
    this.props.dispatch(ToastActionsCreators.displayInfo("Info toast!", 2000));
  };

  render() {
    console.log(this.props);
    const { counter } = this.props.test;
    const { textStyle } = styles;

    return (
      <View>
        <Text style={textStyle}>{counter.toString()} </Text>
        <Button title="INCREMENT" onPress={this.props.incrementCounter} />
        <Button title="DECREMENT" onPress={this.props.decrementCounter} />
        <Button title="SHOW TOAST" onPress={this._displayInfoToast} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    test: state.test
  };
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 60
  }
});

export default connect(
  mapStateToProps,
  { incrementCounter, decrementCounter }
)(ReduxScreen);
