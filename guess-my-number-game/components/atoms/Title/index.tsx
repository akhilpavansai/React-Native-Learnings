import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../../constants/colors";

const Title = (props: any) => {
  return <Text style={styles.title}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: "white",
    padding: 12,
    color: "white",
    maxWidth: "80%",
    width: 300,
  },
});
export default Title;
