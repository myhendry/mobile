import React, { Component } from "react";
import { Text, View } from "react-native";
import { fb } from "../config/firebaseApp";

class FirebaseScreen extends Component {
  _snapshotToArray = snapshot => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  };

  async componentDidMount() {
    await fb
      .database()
      .ref(`friends`)
      .on("value", snapshot => {
        console.log(this._snapshotToArray(snapshot));
      });
  }

  render() {
    return (
      <View>
        <Text> FirebaseScreen </Text>
      </View>
    );
  }
}

export default FirebaseScreen;
