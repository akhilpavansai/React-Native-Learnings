import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }: any) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents Guesses: {guess}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    margin: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
export default GuessLogItem;
