import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
const InstructionText = (props: any) => {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
};
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
