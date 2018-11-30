import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { fb } from "../config/firebaseApp";

class FirebaseScreen extends Component {
  state = {
    friends: []
  };

  _snapshotToArray = snapshot => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  };

  _getDB = async () => {
    await fb
      .database()
      .ref(`friends`)
      .on("value", snapshot => {
        this.setState({
          friends: this._snapshotToArray(snapshot)
        });
      });
  };

  _deleteRow = async key => {
    await fb
      .database()
      .ref(`friends`)
      .child(key)
      .remove();
  };

  componentDidMount() {
    this._getDB();
  }

  render() {
    const { friends } = this.state;

    return (
      <View style={styles.root}>
        <View style={styles.txtContainer}>
          <FlatList
            data={friends}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={{ fontSize: 30 }}>{item.name}</Text>
                <TouchableOpacity onPress={() => this._deleteRow(item.key)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.key}
          />
        </View>
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("FB2")}
            style={styles.fab}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "relative"
  },
  txtContainer: {
    flex: 0.7
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "purple",
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  fabContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default FirebaseScreen;
