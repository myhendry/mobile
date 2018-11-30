import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Button,
  StyleSheet
} from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

let picturesList = [];
const limitAmt = 3;

class PaginationScreen extends Component {
  loadMore = () => {
    this.props.data.fetchMore({
      variables: {
        offset: picturesList.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        return {
          ...prev,
          pictures: [...prev.pictures, ...fetchMoreResult.pictures]
        };
      }
    });
  };

  render() {
    const { loading, pictures, variables } = this.props.data;

    picturesList = pictures;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    let hasMoreData = picturesList.length % variables.limit === 0;

    if (picturesList.length <= variables.offset) {
      hasMoreData = false;
    }

    return (
      <View style={styles.root}>
        <Button title="Show More" onPress={this.loadMore} />
        <FlatList
          data={picturesList}
          renderItem={({ item }) => (
            <View style={styles.contentContainer}>
              <Text style={styles.content}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={() =>
            hasMoreData ? (
              <ActivityIndicator size="large" color="blue" />
            ) : (
              <View />
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  content: {
    fontSize: 35
  },
  contentContainer: {
    padding: 30
  }
});

const PICTURES_QUERY = gql`
  query($offset: Int, $limit: Int) {
    pictures(offset: $offset, limit: $limit) {
      id
      title
      pictureUrl
    }
  }
`;

export default graphql(PICTURES_QUERY, {
  options: () => ({
    variables: {
      limit: limitAmt
    }
  })
})(PaginationScreen);
