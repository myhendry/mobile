import React, { Component } from "react";
import { Text, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/index";

class Redux2Screen extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text> Redux2Screen </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux2Screen);
