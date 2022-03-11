import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useLocations from "./API";
import LocationDetail from "./Location";

export default function App() {
  const { locations, info, loadPrev, loadNext } = useLocations();
  return (
    <View style={styles.container}>
      {info?.prev && (
        <TouchableOpacity onPress={loadPrev} style={styles.button}>
          <Text>Load Previous Page</Text>
        </TouchableOpacity>
      )}
      {locations.map((location) => {
        return <LocationDetail location={location} />;
      })}
      {info?.next && (
        <TouchableOpacity onPress={loadNext} style={styles.button}>
          <Text>Load Next Page</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "steelblue",
  },
});
