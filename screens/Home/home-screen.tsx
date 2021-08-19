import React from "react";
import MainHome from "./main-home";
import ListHome from "./ListHome";
import { StyleSheet, Text, View } from "react-native";

const HomeScren = () => {
  return (
    <View style={styles.container}>
      <MainHome></MainHome>
      <ListHome></ListHome>
    </View>
  );
};

export default HomeScren;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: "flex",
    flex: 1,
  },
});
