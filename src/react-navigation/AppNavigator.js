import { createSwitchNavigator } from "react-navigation";

import { AuthStack } from "./MainNavigator";
import MainNavigator from "./MainNavigator";
import AuthLoading from "../auth/AuthLoading";

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading,
    Auth: AuthStack,
    Main: MainNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);
