import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Buttons from "../../components/atoms/Buttons";
import InstructionText from "../../components/atoms/InstructionText";
import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";
import Colors from "../../constants/colors";

const StartGameScreen = (props: any) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number  has to be number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    props.onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Buttons onPress={resetInputHandler}>Reset</Buttons>
          </View>
          <View style={styles.buttonContainer}>
            <Buttons onPress={confirmInputHandler}>Confirm</Buttons>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
