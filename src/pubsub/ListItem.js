import React from "react";
import { View, Text, StyleSheet } from "react-native";

class ListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.root}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.user.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 120,
    marginLeft: 15,
    marginRight: 15
  }
});

export default ListItem;
