import React, { Component } from "react";
import NavigationService from "../react-navigation/NavigationService";
import { ScrollView, View, Text, AsyncStorage, StyleSheet } from "react-native";

class SideMenu extends Component {
  signOut = async () => {
    NavigationService.navigate("Auth");
    await AsyncStorage.clear();
    await this.props.client.resetStore();
  };

  render() {
    const { header, menu, menuItem, container, footer } = styles;
    const { navigate } = this.props.navigation;

    return (
      <View style={container}>
        <View style={header} />
        <View style={{ flex: 9 }}>
          <ScrollView overScrollMode="never" bounces={false}>
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
                Formik
              </Text>
              <Text style={menuItem} onPress={() => navigate("NonString")}>
                Non String
              </Text>
              <Text style={menuItem} onPress={() => navigate("Conditional")}>
                Conditional
              </Text>
              <Text style={menuItem} onPress={() => navigate("FB")}>
                Firebase
              </Text>
              <Text style={menuItem} onPress={() => navigate("FS")}>
                Firestore
              </Text>

              <Text style={menuItem} onPress={() => navigate("Image")}>
                Image
              </Text>
              <Text style={menuItem} onPress={() => navigate("ApolloUpload")}>
                Upload
              </Text>
              <Text style={menuItem} onPress={() => navigate("Anime")}>
                Animation
              </Text>
              <Text style={menuItem} onPress={() => navigate("MyPubSub")}>
                Pubsub
              </Text>
              <Text style={menuItem} onPress={() => navigate("Sockets")}>
                Sockets
              </Text>
              <Text style={menuItem} onPress={() => navigate("Optimistic")}>
                Optimistic UI
              </Text>
              <Text style={menuItem} onPress={() => navigate("Paginate")}>
                Pagination
              </Text>
              <Text style={menuItem} onPress={() => navigate("Wizard")}>
                Wizard
              </Text>
              <Text style={menuItem} onPress={() => navigate("Paging")}>
                Paging
              </Text>
              <Text style={menuItem} onPress={() => navigate("HOC")}>
                HOC
              </Text>
              <Text style={menuItem} onPress={() => navigate("RP")}>
                Render Props
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={footer}>
          <Text style={menuItem} onPress={this.signOut}>
            Log Out
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
    flex: 0.5,
    zIndex: 2000,
    backgroundColor: "yellow"
  },
  menu: {
    flex: 12,
    paddingBottom: 8
  },
  footer: {
    flex: 0.5,
    paddingTop: 8,
    backgroundColor: "white"
  },
  menuItem: {
    fontSize: 13,
    padding: 5
  }
});

export default SideMenu;
