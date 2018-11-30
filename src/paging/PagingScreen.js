import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";

import Input from "./Input";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

const pages = [<Page1 />, <Page2 />, <Page3 />];
class PagingScreen extends Component {
  state = {
    page: 0
  };

  _handleSubmit = async (values, bag) => {
    try {
      console.log(values);
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  _nextPage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const { container, buttonStyle } = styles;

    return (
      <Formik
        initialValues={{ name: "", email: "", info: "" }}
        onSubmit={values => console.log(values)}
      >
        {props => (
          <View style={container}>
            {pages[this.state.page]}
            <TextInput
              placeholder="Input"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />
            {this.state.page === pages.length - 1 ? (
              <Button
                style={buttonStyle}
                onPress={props.handleSubmit}
                title="Submit"
              />
            ) : (
              <Button
                title="Next Page"
                style={buttonStyle}
                onPress={this._nextPage}
              />
            )}
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    marginTop: 20,
    width: "100%"
  }
});

export default PagingScreen;
