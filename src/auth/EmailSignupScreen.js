import React, { Component } from "react";
import { View, AsyncStorage, StyleSheet } from "react-native";
import { graphql, withApollo } from "react-apollo";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import gql from "graphql-tag";

import Input from "./Input";

class EmailSignupScreen extends Component {
  static navigationOptions = {
    title: "SIGN UP"
  };

  _handleSubmit = async (values, bag) => {
    try {
      const age = parseInt(values.age);
      const response = { ...values, age };
      console.log(response);
      const res = await this.props.mutate({
        variables: {
          email: response.email,
          password: response.password,
          name: response.name,
          age: response.age
        }
      });

      await this.props.client.resetStore();

      if (res.data && res.data.register.token) {
        await AsyncStorage.setItem("@token", res.data.register.token);
        this.props.navigation.navigate("Main");
      }
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
      console.log(error);
    }
  };

  render() {
    const { container, buttonStyle } = styles;

    return (
      <View style={container}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            age: ""
          }}
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
                label="Name"
                autoCapitalize="none"
                autoComplete="none"
                value={values.name}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="name"
                error={touched.name && errors.name}
              />
              <Input
                label="Age"
                autoCapitalize="none"
                autoComplete="none"
                value={values.age}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="age"
                error={touched.age && errors.age}
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

const SIGNUP = gql`
  mutation Signup(
    $email: String!
    $password: String!
    $name: String!
    $age: Int!
  ) {
    register(email: $email, password: $password, name: $name, age: $age) {
      token
    }
  }
`;

export default withApollo(graphql(SIGNUP)(EmailSignupScreen));
