import React, { Component } from "react";
import { View, Button, Image } from "react-native";
import { ImagePicker, Permissions } from "expo";
import { graphql } from "react-apollo";
const { ReactNativeFile } = require("apollo-upload-client");

import { uploadPictureMutation } from "./apollo-upload";

class ApolloUploadScreen extends Component {
  state = {
    result: null,
    image: ""
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: false
    });
    this.setState({ result, image: result.uri });
  };

  uploadImage = async () => {
    const { image } = this.state;

    if (image) {
      const file = new ReactNativeFile({
        uri: image,
        name: "a.jpg",
        type: "image/jpeg"
      });

      try {
        await this.props.mutate({
          variables: {
            file
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View>
        <Button title="SELECT PICTURE" onPress={this.useLibraryHandler} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button title="UPLOAD PICTURE" onPress={this.uploadImage} />
      </View>
    );
  }
}

export default graphql(uploadPictureMutation)(ApolloUploadScreen);
