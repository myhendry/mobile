import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";

class Input extends PureComponent {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { root } = styles;
    const { placeholder, error, ...rest } = this.props;

    return (
      <View style={root}>
        <FormLabel>{placeholder}</FormLabel>
        <FormInput
          placeholder={placeholder}
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          {...rest}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    alignSelf: "center"
  }
});

export default Input;
