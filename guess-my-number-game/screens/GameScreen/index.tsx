import { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Buttons from "../../components/atoms/Buttons";
import InstructionText from "../../components/atoms/InstructionText";
import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";
import NumberContainer from "../../components/molecules/NumberContainer";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween: any = (
  min: number,
  max: number,
  exclude: number
) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props: any) => {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);
  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Buttons onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </Buttons>
          </View>
          <View style={styles.buttonContainer}>
            <Buttons onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </Buttons>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
    fontWeight: "bold",
    color: "#ddb52f",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default GameScreen;
