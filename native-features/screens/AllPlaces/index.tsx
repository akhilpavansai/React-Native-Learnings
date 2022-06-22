import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Place } from "../../models/place";
import { fetchPlaces } from "../../util/database";
import PlacesList from "../../components/PlaceList";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>();

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
