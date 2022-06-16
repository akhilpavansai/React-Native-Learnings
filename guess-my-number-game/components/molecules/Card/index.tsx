import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const Card = (props: any) => {
  return <View style={styles.card}>{props.children}</View>;
};
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    padding: 16,
    marginTop: 36,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
