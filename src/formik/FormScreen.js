import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

class FormScreen extends Component {
  render() {
    // console.log(this.props);
    const {
      values: { name, email },
      handleChange,
      handleBlur,
      handleSubmit,
      errors,
      touched,
      isSubmitting
    } = this.props;
    const { root } = styles;

    return (
      <View style={root}>
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange("name")}
          value={name}
        />
        {touched.name && errors.name && <Text>{errors.name}</Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleChange("email")}
          value={email}
        />
        {touched.email && errors.email && <Text>{errors.email}</Text>}
        <Button disabled={isSubmitting} title="SUBMIT" onPress={handleSubmit} />
      </View>
    );
  }
}

const FormikApp = withFormik({
  mapPropsToValues({ name, email }) {
    return {
      name: name || "",
      email: email || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be 9 characters or longer")
      .required("Name is required"),

    email: Yup.string()
      .email("Email not valid")
      .required("Email is required")
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    try {
      console.log(values);
      resetForm();
    } catch (error) {
      console.log(error);
      setErrors("Form submission unsuccessful");
    }
  }
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 30,
    padding: 20
  }
});

export default FormikApp(FormScreen);
