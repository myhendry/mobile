import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.socialBtns}>
          <SocialIcon title="Sign In With Facebook" button type="facebook" />
          <SocialIcon
            title="Sign In With Google"
            button
            type="google-plus-official"
          />
          <SocialIcon
            title="Sign In With Email"
            button
            type="envelope"
            onPress={() => this.props.navigation.navigate("EmailSignin")}
          />
          <Button
            title="Sign up"
            onPress={() => this.props.navigation.navigate("EmailSignup")}
          />
          <Button
            title="Jump to Main"
            onPress={() => this.props.navigation.navigate("Main")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  socialBtns: {
    width: "80%"
  }
});
