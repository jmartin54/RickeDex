import { Text, FlatList, StyleSheet, View } from "react-native";
import Location from "../../Models/Location";
import CharacterPreview from "./CharacterPreview";

type LocationProps = {
  location: Location;
};
export default function LocationDetail({ location }: LocationProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{location.name}</Text>
      {location.residents.length == 0 && <Text> No residents</Text>}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={location.residents}
        renderItem={({ item }) => <CharacterPreview character={item} />}
        keyExtractor={(item, index) => `${index}${item}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 20, marginTop: 15 },
  container: {
    height: 170,
  },
});
