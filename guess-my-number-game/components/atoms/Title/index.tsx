import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const Title = (props: any) => {
  return <Text style={styles.title}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    color: "white",
  },
});
export default Title;
