import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

class StateScreen extends Component {
  _updateAScore = (updateGame, teamAScore) => {
    updateGame({
      variables: {
        index: "teamAScore",
        value: parseInt(teamAScore, 10) + 1
      }
    });
  };

  render() {
    const {
      data: {
        loading,
        currentGame: { teamAScore, teamBScore, teamAName, teamBName }
      },
      updateGame
    } = this.props;

    if (loading === true) return <ActivityIndicator size="large" />;

    return (
      <View style={styles.container}>
        <Text> {teamAName} </Text>
        <Text> {teamAScore} </Text>
        <Button
          title="SCORE!"
          onPress={() => this._updateAScore(updateGame, teamAScore)}
        />
        <Text> {teamBName} </Text>
        <Text> {teamBScore} </Text>
        <Button
          title="SCORE!"
          onPress={() =>
            updateGame({
              variables: {
                index: "teamBScore",
                value: parseInt(teamBScore, 10) + 1
              }
            })
          }
        />
      </View>
    );
  }
}

const GET_CURRENT_GAME = gql`
  {
    currentGame @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`;

const UPDATE_GAME_MUTATION = gql`
  mutation updateGame($index: String!, $value: String!) {
    updateGame(index: $index, value: $value) @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`;

export default compose(
  graphql(GET_CURRENT_GAME),
  graphql(UPDATE_GAME_MUTATION, { name: "updateGame" })
)(StateScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
