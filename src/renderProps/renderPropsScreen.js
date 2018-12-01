import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import ToggleChildren from "./rpChildren";
import ToggleRender from "./rpRender";

class renderPropsScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text> renderPropsScreen </Text>
        <View style={styles.top}>
          <ToggleChildren>
            {({ on, toggle, title }) => (
              <View>
                <Text>{title}</Text>
                {on && <Text>Hey children</Text>}
                <Button title="Toggle" onPress={toggle} />
              </View>
            )}
          </ToggleChildren>
        </View>
        <View style={styles.bottom}>
          <ToggleRender
            render={({ on, toggle }) => (
              <View>
                {on && <Text>Hey render</Text>}
                <Button title="Toggle" onPress={toggle} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default renderPropsScreen;
