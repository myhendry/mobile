import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const data = [
  {
    id: "1",
    name: "Alex",
    age: "19",
    country: "Taiwan"
  },
  {
    id: "2",
    name: "Jenny",
    age: "21",
    country: "USA"
  }
];

class HierarchyScreen extends Component {
  state = {
    selectedPerson: null
  };

  _personSelected = person => () => {
    // console.log(person);
    this.setState({
      selectedPerson: person
    });
    // console.log(this.state.selectedPerson);
  };

  render() {
    const { root, top, bottom } = styles;
    return (
      <View style={root}>
        <View style={top}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ItemList
                info="abc"
                selected={this._personSelected}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={bottom}>
          <ItemDisplay selectedPerson={this.state.selectedPerson} />
        </View>
      </View>
    );
  }
}

const ItemList = ({ item, selected }) => {
  const { list } = styles;
  return (
    <TouchableOpacity onPress={selected(item)}>
      <View style={list}>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
        <Text>{item.country}</Text>
        <Text>- - - - - - - -</Text>
      </View>
    </TouchableOpacity>
  );
};

const emptyPerson = {
  name: "",
  age: "",
  country: ""
};

class ItemDisplay extends Component {
  state = {
    keyPerson: emptyPerson
  };

  componentDidMount() {
    // console.log(this.props.selectedPerson);
    if (this.props.selectedPerson !== null) {
      this.setState({
        keyPerson: this.props.selectedPerson
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPerson !== this.props.selectedPerson) {
      this.setState({
        // keyPerson: nextProps.selectedPerson || this.props.selectedPerson
        keyPerson: nextProps.selectedPerson || emptyPerson
      });
    }
  }

  render() {
    const { show, highlight } = styles;
    const { name, age, country } = this.state.keyPerson;
    return (
      <View style={show}>
        <Text style={highlight}>USING componentWillReceiveProps</Text>
        <Text>{name}</Text>
        <Text>{country}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  top: {
    flex: 2
  },
  bottom: {
    flex: 3
  },
  list: {
    alignItems: "center",
    justifyContent: "center"
  },
  show: {
    backgroundColor: "green",
    flex: 1
  },
  highlight: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default HierarchyScreen;
