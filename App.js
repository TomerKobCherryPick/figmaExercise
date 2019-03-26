import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LibraryFlatList from "./js/LibraryFlatList.js";
import styles from "./js/styles/AppStyles.js"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      key: 0
    };
  }
  componentDidMount() {
    const items = ["", "", "who like to fish", ""].map(text =>
      this.createItem(text)
    );
    this.setState({
      items: items
    });
  }
  createItem(text) {
    console.log("creating an item");
    return {
      key: '' + this.state.key++ ,
      text: "Weekly sales calls in 2018 by reps " + text,
      numberOfCalls: 26,
      numberOfFolders: 2
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LibraryFlatList items={this.state.items} />
      </View>
    );
  }
}
