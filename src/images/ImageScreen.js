import React, { Component } from "react";
import { Button, Text, ScrollView, StyleSheet, Image } from "react-native";
import { ImagePicker, Permissions, Constants } from "expo";
import axios from "axios";

export default class ImageScreen extends Component {
  state = {
    result: null,
    image: ""
  };

  componentDidMount() {
    this.fetchImages();
  }

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
      base64: true
    });
    this.setState({ result, image: result.uri });
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
    this.setState({ result });
  };

  postImage = () => {
    const apiUrl = "http://localhost:3000/image/upload";
    const uri = this.state.image;
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];

    const formData = new FormData();
    formData.append("photo", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`
    });

    const options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    };

    return fetch(apiUrl, options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    //   axios
    //     .post(apiUrl, options)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
  };

  testForm = () => {
    console.log(this.state.image);
    const formData = new FormData();
    formData.append("test", {
      name: "Test",
      age: 23
    });

    const data = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    };

    axios
      .post("http://localhost:3000/test", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchImages = async () => {
    axios
      .get(
        "https://res.cloudinary.com/hendrylim/image/upload/v1531554441/hcusvaoduhycjjyrpemr.jpg"
      )
      .then(res => console.log(res));
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Button title="launchCameraAsync" onPress={this.useCameraHandler} />
        <Button
          title="launchImageLibraryAsync"
          onPress={this.useLibraryHandler}
        />
        <Button title="Upload Image" onPress={this.postImage} />
        <Button title="Test FormData" onPress={this.testForm} />
        <Text style={styles.paragraph}>
          {JSON.stringify(this.state.result)}
        </Text>
        {/* {console.log(this.state.result)} */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    minHeight: 1000
  },
  paragraph: {
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 18,
    color: "#34495e"
  },
  img: {
    height: 150,
    width: 150
  }
});
