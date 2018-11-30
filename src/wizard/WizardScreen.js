import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import Input from "./Input";
import Wizard from "./Wizard";

class WizardScreen extends Component {
  render() {
    console.log("Screen Props ", this.props);
    return (
      <View style={{ flex: 1 }}>
        <Wizard
          initialValues={{
            name: "Ali",
            email: "",
            nickName: "",
            location: ""
          }}
        >
          <Wizard.Step>
            {({ formikProps }) => (
              <View style={styles.card}>
                <Input
                  name="location"
                  autoCapitalize="none"
                  autoComplete="none"
                  placeholder="Location"
                  onChange={formikProps.setFieldValue}
                  onTouch={formikProps.setFieldTouched}
                  value={formikProps.values.location}
                  error={
                    formikProps.touched.location && formikProps.errors.location
                  }
                />
              </View>
            )}
          </Wizard.Step>
          <Wizard.Step>
            {({ formikProps }) => (
              <View style={styles.card}>
                <TextInput
                  placeholder="Name"
                  onChangeText={formikProps.handleChange("name")}
                  onBlur={formikProps.handleBlur("name")}
                  value={formikProps.values.name}
                />
                <TextInput
                  placeholder="Nickname"
                  onChangeText={formikProps.handleChange("nickName")}
                  onBlur={formikProps.handleBlur("nickName")}
                  value={formikProps.values.nickName}
                />
              </View>
            )}
          </Wizard.Step>
          <Wizard.Step>
            {({ formikProps }) => (
              <View style={styles.card}>
                <TextInput
                  placeholder="Email"
                  onChangeText={formikProps.handleChange("email")}
                  onBlur={formikProps.handleBlur("email")}
                  value={formikProps.values.email}
                />
              </View>
            )}
          </Wizard.Step>
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center"
  },

  input: {}
});

export default WizardScreen;
