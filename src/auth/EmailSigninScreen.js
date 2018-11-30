import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { graphql, withApollo } from "react-apollo";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import gql from "graphql-tag";

import Input from "./Input";

class EmailSigninScreen extends Component {
  static navigationOptions = {
    title: "SIGN IN"
  };

  _handleSubmit = async (values, bag) => {
    try {
      const res = await this.props.mutate({
        variables: {
          ...values
        }
      });

      await this.props.client.resetStore();

      if (res.data && res.data.login.token) {
        await AsyncStorage.setItem("@token", res.data.login.token);
        this.props.navigation.navigate("Main");
      }
    } catch (error) {
      console.log(error);
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };

  render() {
    const { container, buttonStyle } = styles;

    return (
      <View style={container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Not valid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6)
              .required("Password is required")
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

const SIGNIN = gql`
  mutation Signin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default withApollo(graphql(SIGNIN)(EmailSigninScreen));
