import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { graphql, withApollo } from "react-apollo";
import gql from "graphql-tag";

import ListItem from "./ListItem";

class PubSubScreen extends Component {
  componentDidMount() {
    this._getUserInfo();
    this.props.data.subscribeToMore({
      document: SUBSCRIBE_NEW_PICTURE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newPicture = subscriptionData.data.newPicture;

        if (!prev.pictures.find(p => p.id === newPicture.id)) {
          return {
            ...prev,
            pictures: [
              {
                ...newPicture
              },
              ...prev.pictures
            ]
          };
        }
      }
    });
  }

  _getUserInfo = async () => {
    const user = await this.props.client.query({ query: ME_QUERY });
    console.log(user);
  };

  render() {
    const { loading, data } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <View style={styles.root}>
        <FlatList
          data={data.pictures}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 15
  }
});

const SUBSCRIBE_NEW_PICTURE = gql`
  subscription {
    newPicture {
      id
      title
      pictureUrl
      user {
        id
        name
      }
    }
  }
`;

const GET_PICTURES = gql`
  {
    pictures {
      id
      title
      pictureUrl
      user {
        id
        name
      }
    }
  }
`;

const ME_QUERY = gql`
  {
    me {
      id
      name
      email
      age
    }
  }
`;

export default withApollo(graphql(GET_PICTURES)(PubSubScreen));
