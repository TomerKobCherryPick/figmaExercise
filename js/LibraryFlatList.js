import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "./styles/LibraryFlatListStyles.js";

const Row = props => (
  <View style={styles.row}>
    <View style={styles.box}>
      <View style={styles.purpleView} />
      <View style={styles.folderAndText}>
        <Image
          style={styles.folderImage}
          source={require("../Images/folder(Stroke).png")}
        />
        <Text
          numberOfLines={2}
          allowFontScaling={false}
          style={styles.titleText}
        >
          {props.text}
        </Text>
      </View>
      <View style={styles.detailView}>
        <Text style={styles.detailViewText}>
          {" "}
          {props.numberOfCalls + " Calls"}{" "}
        </Text>
        <View style={styles.detailViewSeprator} />
        <Text style={styles.detailViewText}>
          {" "}
          {props.numberOfFolders + " folders"}{" "}
        </Text>
      </View>
    </View>
  </View>
);
const renderItem = ({ item }) => <Row {...item} />;

const LibraryFlatList = props => (
  <View style={styles.container}>
    <FlatList renderItem={renderItem} data={props.items} />
  </View>
);

export default LibraryFlatList;
