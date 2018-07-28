import React from "react";
import { View, Text, Button } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  NavigationActions
} from "react-navigation";
import { Foundation } from "@expo/vector-icons";

import MainScreen from "../_dir/MainScreen";
import AboutScreen from "../_dir/AboutScreen";
import StateScreen from "../apollo-link-state/StateScreen";
import ImageScreen from "../images/ImageScreen";
import ContextScreen from "../context/ContextScreen";
import ConditionalScreen from "../conditional/Main";
import HierarchyScreen from "../receiveProps/HierarchyScreen";
import FormScreen from "../formik/FormScreen";
import RNFormScreen from "../formik/RNFormScreen";
import SideMenu from "../drawer/SideMenu";

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: "MAIN",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const ImageStack = createStackNavigator({
  Image: {
    screen: ImageScreen,
    navigationOptions: ({ navigation }) => ({
      title: "IMAGE",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const FormStack = createStackNavigator({
  Form: {
    screen: FormScreen,
    navigationOptions: ({ navigation }) => ({
      title: "FORMIK",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const RNFormStack = createStackNavigator({
  RNForm: {
    screen: RNFormScreen,
    navigationOptions: ({ navigation }) => ({
      title: "FORMIK",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const HierarchyStack = createStackNavigator({
  Hierarchy: {
    screen: HierarchyScreen,
    navigationOptions: ({ navigation }) => ({
      title: "HIERARCHY",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const ConditionalStack = createStackNavigator({
  Conditional: {
    screen: ConditionalScreen,
    navigationOptions: ({ navigation }) => ({
      title: "CONDITIONAL",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const StateStack = createStackNavigator({
  State: {
    screen: StateScreen,
    navigationOptions: ({ navigation }) => ({
      title: "STATE",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const ContextStack = createStackNavigator({
  Context: {
    screen: ContextScreen,
    navigationOptions: ({ navigation }) => ({
      title: "CONTEXT",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      title: "ABOUT",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});

export default createDrawerNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: ({ navigation }) => ({
        title: "MAIN"
      })
    },
    State: {
      screen: StateStack,
      navigationOptions: () => ({
        title: "STATE"
      })
    },
    Context: {
      screen: ContextStack,
      navigationOptions: () => ({
        title: "CONTEXT"
      })
    },
    Form: {
      screen: FormStack,
      navigationOptions: () => ({
        title: "FORM"
      })
    },
    RNForm: {
      screen: RNFormStack,
      navigationOptions: () => ({
        title: "REACT NATIVE FORM"
      })
    },
    Hierarchy: {
      screen: HierarchyStack,
      navigationOptions: () => ({
        title: "HIERARCHY"
      })
    },
    Conditional: {
      screen: ConditionalStack,
      navigationOptions: () => ({
        title: "CONDITIONAL"
      })
    },
    Image: {
      screen: ImageStack,
      navigationOptions: () => ({
        title: "IMAGE"
      })
    },
    About: {
      screen: AboutStack,
      navigationOptions: () => ({
        title: "ABOUT"
      })
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 250
  }
);
