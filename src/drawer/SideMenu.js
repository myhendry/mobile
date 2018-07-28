import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, View, Text, StyleSheet } from "react-native";

class SideMenu extends Component {
  render() {
    const { header, menu, menuItem, container, footer } = styles;
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <View style={header} />
        <View style={{ flex: 9 }}>
          <ScrollView
            contentContainerStyle={container}
            overScrollMode="never"
            bounces={false}
          >
            <View style={menu}>
              <Text style={menuItem} onPress={() => navigate("Main")}>
                Main
              </Text>
              <Text style={menuItem} onPress={() => navigate("State")}>
                State
              </Text>
              <Text style={menuItem} onPress={() => navigate("Context")}>
                Context
              </Text>
              <Text style={menuItem} onPress={() => navigate("MyRedux")}>
                Redux
              </Text>
              <Text style={menuItem} onPress={() => navigate("Hierarchy")}>
                Hierarchy
              </Text>
              <Text style={menuItem} onPress={() => navigate("Form")}>
                Form
              </Text>
              <Text style={menuItem} onPress={() => navigate("RNForm")}>
                React Native Form
              </Text>
              <Text style={menuItem} onPress={() => navigate("NonString")}>
                Non String
              </Text>
              <Text style={menuItem} onPress={() => navigate("Conditional")}>
                Conditional
              </Text>

              <Text style={menuItem} onPress={() => navigate("Image")}>
                Image
              </Text>
              <Text style={menuItem} onPress={() => navigate("Anime")}>
                Animation
              </Text>
              <Text style={menuItem} onPress={() => navigate("MyPubSub")}>
                Pubsub
              </Text>
              <Text style={menuItem} onPress={() => navigate("Paginate")}>
                Pagination
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={footer}>
          <Text style={menuItem} onPress={() => navigate("About")}>
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
  header: {
    flex: 1,
    zIndex: 2000,
    backgroundColor: "yellow"
  },
  menu: {
    flex: 6,
    paddingBottom: 10
  },
  footer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white"
  },
  menuItem: {
    fontSize: 20,
    padding: 10
  }
});

export default SideMenu;
