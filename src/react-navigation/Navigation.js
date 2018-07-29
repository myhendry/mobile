import React from "react";
import { Button } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import MainScreen from "../_dir/MainScreen";
import AboutScreen from "../_dir/AboutScreen";
import StateScreen from "../apollo-link-state/StateScreen";
import ContextScreen from "../context/ContextScreen";
import ReduxScreen from "../redux/ReduxScreen";
import Redux2Screen from "../redux/Redux2Screen";
import ImageScreen from "../images/ImageScreen";
import ConditionalScreen from "../conditional/Main";
import HierarchyScreen from "../receiveProps/HierarchyScreen";
import FormScreen from "../formik/FormScreen";
import RNFormScreen from "../formik/RNFormScreen";
import NonStringScreen from "../non_string/NonStringScreen";
import AnimationScreen from "../animation/AnimationScreen";
import PaginationScreen from "../pagination/PaginationScreen";
import PubSubScreen from "../pubsub/PubSubScreen";
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
const PaginationStack = createStackNavigator({
  Paginate: {
    screen: PaginationScreen,
    navigationOptions: ({ navigation }) => ({
      title: "PAGINATE",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});
const PubSubStack = createStackNavigator({
  MyPubSub: {
    screen: PubSubScreen,
    navigationOptions: ({ navigation }) => ({
      title: "PUB SUB",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  }
});
const AnimationStack = createStackNavigator({
  Anime: {
    screen: AnimationScreen,
    navigationOptions: ({ navigation }) => ({
      title: "ANIMATION",
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

const NonStringStack = createStackNavigator({
  NonString: {
    screen: NonStringScreen,
    navigationOptions: ({ navigation }) => ({
      title: "NON - STRING",
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

const ReduxStack = createStackNavigator({
  MyRedux: {
    screen: ReduxScreen,
    navigationOptions: ({ navigation }) => ({
      title: "REDUX",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerLeft: (
        <Button title="OPEN" onPress={() => navigation.openDrawer()} />
      )
    })
  },
  Redux2: {
    screen: Redux2Screen,
    navigationOptions: ({ navigation }) => ({
      title: "REDUX",
      headerStyle: {
        backgroundColor: "yellow"
      },
      headerRight: (
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
    Redux: {
      screen: ReduxStack,
      navigationOptions: () => ({
        title: "REDUX"
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
    NonString: {
      screen: NonStringStack,
      navigationOptions: () => ({
        title: "NON - STRING"
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
    Anime: {
      screen: AnimationStack,
      navigationOptions: () => ({
        title: "ANIMATION"
      })
    },
    MyPubSub: {
      screen: PubSubStack,
      navigationOptions: () => ({
        title: "PUB SUB"
      })
    },
    Paginate: {
      screen: PaginationStack,
      navigationOptions: () => ({
        title: "PAGINATION"
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
    drawerWidth: 200,
    drawerBackgroundColor: "yellow"
  }
);
