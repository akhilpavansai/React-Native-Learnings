import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView } from "react-native";
import { StackParamList } from "../../App";
import PlaceForm from "../../components/PlaceForm";
import { Place } from "../../models/place";
import { insertPlace } from "../../util/database";

interface AddPlaceProps extends NativeStackScreenProps<StackParamList> {}

const AddPlace = ({ navigation }: AddPlaceProps) => {
  async function createPlaceHandler(place: Place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return (
    <ScrollView>
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </ScrollView>
  );
};

export default AddPlace;
