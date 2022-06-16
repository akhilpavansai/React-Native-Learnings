import React, { ReactNode } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../../constants/colors";

const Buttons = (props: any) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
export default Buttons;
