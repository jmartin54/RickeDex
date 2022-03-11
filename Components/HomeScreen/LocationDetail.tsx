import { Text, FlatList, StyleSheet, View } from "react-native";
import Location from "../../Models/Location";
import CharacterLoader from "./CharacterLoader";

type LocationProps = {
  location: Location;
};
export default function LocationDetail({ location }: LocationProps) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginTop: 15 }}>{location.name}</Text>
      {location.residents.length == 0 && <Text> No residents</Text>}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={location.residents}
        renderItem={({ item }) => <CharacterLoader apiUrl={item} />}
        keyExtractor={(item, index) => `${index}${item}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
});
