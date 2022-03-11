import { Text, FlatList } from "react-native";
import { Location } from "./API";
import CharacterLoader from "./CharacterLoader";

type LocationProps = {
  location: Location;
};
export default function LocationDetail({ location }: LocationProps) {
  return (
    <>
      <Text style={{ fontSize: 25, marginTop: 15 }}>{location.name}</Text>
      <FlatList
        horizontal={true}
        data={location.residents}
        renderItem={({ item }) => <CharacterLoader apiUrl={item} />}
        keyExtractor={(item, index) => `${index}`}
      />
    </>
  );
}
