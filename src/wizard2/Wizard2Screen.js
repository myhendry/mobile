import React, { Component } from "react";
import { Text, View } from "react-native";

import Wizard from "./Wizard";

class Wizard2Screen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Wizard>
          <Wizard.Step>
            <View
              style={{
                flex: 1,
                backgroundColor: "red",
                justifyContent: "center"
              }}
            >
              <Text>Name</Text>
            </View>
          </Wizard.Step>
          <Wizard.Step>
            <View
              style={{
                flex: 1,
                backgroundColor: "blue",
                justifyContent: "center"
              }}
            >
              <Text>Email</Text>
            </View>
          </Wizard.Step>
          <Wizard.Step>
            <View
              style={{
                flex: 1,
                backgroundColor: "purple",
                justifyContent: "center"
              }}
            >
              <Text>Name</Text>
            </View>
          </Wizard.Step>
        </Wizard>
      </View>
    );
  }
}

export default Wizard2Screen;
