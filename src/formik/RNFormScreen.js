import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "./Input";

const api = user =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === "hello@gmail.com") {
        reject({ email: "Email already use" });
      } else {
        resolve();
      }
    }, 2000);
  });

class RNFormScreen extends Component {
  _handleSubmit = async (values, bag) => {
    try {
      await api(values);
      Alert.alert("Successful!");
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  render() {
    const { container, buttonStyle } = styles;

    return (
      <View style={container}>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Not valid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6)
              .required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf(
                [Yup.ref("password", null)],
                "Confirm Password must matched Password"
              )
              .required("Confirm Password is required")
          })}
          render={({
            values,
            handleSubmit,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            isValid,
            isSubmitting
          }) => (
            <React.Fragment>
              <Input
                label="Email"
                autoCapitalize="none"
                autoComplete="none"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="email"
                error={touched.email && errors.email}
              />
              <Input
                label="Password"
                autoComplete={false}
                autoCapitalize="none"
                secureTextEntry
                name="password"
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                error={touched.password && errors.password}
              />
              <Input
                label="Confirm Password"
                autoComplete={false}
                autoCapitalize="none"
                secureTextEntry
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <Button
                backgroundColor="purple"
                buttonStyle={buttonStyle}
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: "center"
  },
  buttonStyle: {
    marginTop: 20,
    width: "100%"
  }
});

export default RNFormScreen;
