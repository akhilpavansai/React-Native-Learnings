import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants/colors";

const Card = (props: any) => {
  return <View style={styles.card}>{props.children}</View>;
};
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
