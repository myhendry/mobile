import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            Main
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("State")}
          >
            State
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("Context")}
          >
            Context
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("Hierarchy")}
          >
            Hierarchy
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("Form")}
          >
            Form
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("RNForm")}
          >
            React Native Form
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("Conditional")}
          >
            Conditional
          </Text>

          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("Image")}
          >
            Image
          </Text>
        </View>
        <View style={styles.lowerContainer}>
          <Text
            style={styles.menuItem}
            onPress={() => this.props.navigation.navigate("About")}
          >
            About
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow"
  },
  upperContainer: {
    flex: 4,
    paddingTop: 70,
    paddingBottom: 10
  },
  lowerContainer: {
    flex: 3
  },
  menuItem: {
    fontSize: 20,
    padding: 15
  }
});

export default SideMenu;
