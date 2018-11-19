import React, { PureComponent } from "react";
import { View, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

class Step extends PureComponent {
  state = {};
  render() {
    console.log("Step Props ", this.props);
    const { formikProps } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.props.children({
          onChangeValue: this.props.onChangeValue,
          formikProps: this.props.formikProps
        })}{" "}
        Step {this.props.currentIndex}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            justifyContent: "space-around"
          }}
        >
          <Button
            title="<<"
            disabled={this.props.currentIndex === 0}
            onPress={this.props.prevStep}
          />
          <Button
            title="Submit"
            disabled={!this.props.isLast || formikProps.isSubmitting}
            onPress={formikProps.handleSubmit}
            loading={formikProps.isSubmitting}
          />
          <Button
            title=">>"
            disabled={this.props.isLast}
            onPress={this.props.nextStep}
          />
        </View>
      </View>
    );
  }
}

const later = (delay, value) =>
  new Promise(resolve => setTimeout(resolve, delay, value));

class Wizard extends PureComponent {
  static Step = props => <Step {...props} />;

  state = {
    index: 0,
    values: { ...this.props.initialValues }
  };

  _nextStep = () => {
    if (this.state.index !== this.props.children.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }
  };

  _prevStep = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1
      }));
    }
  };

  _onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };

  _handleSubmit = async (values, bag) => {
    try {
      await later(3000, values);
      bag.setSubmitting(false);
      bag.resetForm();
    } catch (error) {
      bag.setSubmitting(false);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Formik
          initialValues={this.state.values}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            location: Yup.string().required("location is required")
          })}
        >
          {props => {
            console.log(this.state);
            return React.Children.map(this.props.children, (el, index) => {
              if (index === this.state.index) {
                return React.cloneElement(el, {
                  currentIndex: this.state.index,
                  nextStep: this._nextStep,
                  prevStep: this._prevStep,
                  isLast: this.state.index === this.props.children.length - 1,
                  onChangeValue: this._onChangeValue,
                  formikProps: props
                });
              }
              return null;
            });
          }}
        </Formik>
      </View>
    );
  }
}

export default Wizard;
