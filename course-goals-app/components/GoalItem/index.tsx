import { Text, View, StyleSheet, Pressable } from "react-native";

export interface GoalItemProps {
  text: string;
  customKey: string;
  onDeleteHandler: any;
}
const GoalItem = (props: GoalItemProps) => {
  return (
    <Pressable
      android_ripple={{ color: "#cccccc" }}
      key={props.customKey}
      onPress={() => props.onDeleteHandler(props.customKey)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
