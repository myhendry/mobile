import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ToastActionsCreators } from "react-native-redux-toast";

import { incrementCounter, decrementCounter } from "./actions/index";

class ReduxScreen extends Component {
  _displayInfoToast = () => {
    this.props.dispatch(ToastActionsCreators.displayInfo("Info toast!", 2000));
  };

  render() {
    // console.log(this.props);
    const { counter } = this.props.test;
    const { textStyle } = styles;

    return (
      <View>
        <Text style={textStyle}>{counter.toString()} </Text>
        <Button title="INCREMENT" onPress={this.props.incrementCounter} />
        <Button title="DECREMENT" onPress={this.props.decrementCounter} />
        <Button title="SHOW TOAST" onPress={this._displayInfoToast} />
        <Button
          title="NEXT"
          onPress={() => this.props.navigation.navigate("Redux2")}
        />
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

// OK METHOD 1 - ADDING DISPATCH
// const mapDispatchToProps = dispatch => {
//   const actionCreators = bindActionCreators(
//     {
//       incrementCounter,
//       decrementCounter
//     },
//     dispatch
//   );
//   return { ...actionCreators, dispatch };
// };

// OK METHOD 2 - ADDING DISPATCH
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ incrementCounter, decrementCounter }, dispatch)
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
  mapDispatchToProps
)(ReduxScreen);
