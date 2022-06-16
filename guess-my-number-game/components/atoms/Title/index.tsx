import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const Title = (props: any) => {
  return <Text style={styles.title}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
export default Title;
