import React, { Component } from "react";
import { Text, View } from "react-native";
import { fs } from "../config/firebaseApp";

class FirestoreScreen extends Component {
  async componentDidMount() {
    const employees = [];
    await fs
      .collection("employees")
      .get()
      .then(snapShot => {
        snapShot.forEach(doc => {
          employees.push({
            key: doc.id,
            ...doc.data()
          });
        });
        console.log(employees);
      });
  }

  render() {
    return (
      <View>
        <Text> FirestoreScreen </Text>
      </View>
    );
  }
}

export default FirestoreScreen;
