import React from "react";
import firebase from "firebase";

export const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    name: "Hendry Lim",
    country: "Taiwan",
    age: 23,
    isAdmin: true,
    fbBool: false
  };

  _listGlobalFriends = () => {
    firebase
      .database()
      .ref("/friends")
      .once("value", snap => {
        const friends = Object.values(snap.val());
        const fbBool = friends[0].friend;
        this.setState({
          fbBool
        });
      });
  };

  _addAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addAge: this._addAge,
          listGlobalFriends: this._listGlobalFriends
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

// Use MyProvider in App.js
export default MyProvider;
