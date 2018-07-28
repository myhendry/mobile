import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button
} from "native-base";
import firebase from "firebase";

import User from "./User";
import Admin from "./Admin";
import { withContext } from "../context/withContext";

class Main extends Component {
  state = {
    admin: true,
    show: true,
    yell: false,
    parade: true,
    bool: false
  };

  componentDidMount() {
    // console.log(this.props);
    this._listLocalFriends();
    this.props.context.listGlobalFriends();
  }

  _addToFb = () => {
    const user = {
      name: "Sarah",
      friend: false
    };
    firebase
      .database()
      .ref("/friends")
      .push(user);
  };

  _listLocalFriends = () => {
    firebase
      .database()
      .ref("/friends")
      .once("value", snap => {
        const friends = Object.values(snap.val());
        const bool = friends[0].friend;
        this.setState({
          bool
        });
      });
  };

  render() {
    let display = null;
    let present = null;
    let pals = null;
    let presentation = null;

    if (this.state.bool) {
      pals = <Text>We are pals</Text>;
    } else {
      pals = <Text>You are a stranger</Text>;
    }

    if (this.state.parade) {
      display = <Text>I am being display</Text>;
    } else {
      display = <Text>Do Not display</Text>;
    }

    if (this.props.context.state.isAdmin) {
      present = <Text>I am a Global Admin Present</Text>;
    } else {
      present = <Text>I am Not Present</Text>;
    }

    if (this.props.context.state.fbBool) {
      presentation = <Text>Global FB Showing</Text>;
    } else {
      presentation = <Text>Global FB Not Showing</Text>;
    }

    if (this.state.admin) {
      return (
        <Container>
          <Content>
            {presentation}
            {this.props.context.state.fbBool && <Text>Show Global FB</Text>}
            {this.state.bool ? <Text>Show Local FB</Text> : null}
            {this.state.bool && <Text>Show Local from Firebase DB</Text>}
            {pals}
            {this.props.context.state.isAdmin && (
              <Text>I am a Global Admin</Text>
            )}
            {this.props.context.state.isAdmin ? (
              <Text>I am a Global Tenerary Admin</Text>
            ) : (
              <Text>Who am I?</Text>
            )}
            {present}
            {display}
            {this.state.show && <Text>Hello</Text>}
            {this.state.yell ? <Text>Yelling</Text> : <Text>Not Yelling</Text>}
            <Admin />
            <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
              <Button full success onPress={this._addToFb}>
                <Text>SAVE</Text>
              </Button>
              <Button full info onPress={this._listFriends}>
                <Text>LIST</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      );
    }
    return <User />;
  }
}

export default withContext(Main);
