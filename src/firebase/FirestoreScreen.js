import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { fs } from "../config/firebaseApp";

class FirestoreScreen extends Component {
  state = {
    employees: []
  };

  _getData = async () => {
    // Get using async and await
    let employees = [];
    const snaps = await fs.collection("employees").onSnapshot();
    snaps.forEach(x => {
      employees.push({
        key: x.id,
        ...x.data()
      });
    });
    this.setState({
      employees
    });
  };

  _getEmployees = () => {
    fs.collection("employees").onSnapshot(querySnapshot => {
      let employees = [];
      querySnapshot.forEach(function(doc) {
        employees.push({
          key: doc.id,
          ...doc.data()
        });
      });
      this.setState({
        employees
      });
    });
  };

  _deleteRow = async key => {
    try {
      await fs
        .collection("employees")
        .doc(key)
        .delete();
    } catch (error) {
      throw error;
    }
  };

  componentDidMount() {
    this._getEmployees();
  }

  render() {
    const { employees } = this.state;

    return (
      <View style={styles.root}>
        <View style={styles.txtContainer}>
          <FlatList
            data={employees}
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
            onPress={() => this.props.navigation.navigate("FS2")}
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

export default FirestoreScreen;
