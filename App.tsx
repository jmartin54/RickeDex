import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocations } from "./API";
import LocationDetail from "./Location";

export default function App() {
  const { locations, loadNext } = useLocations();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <LocationDetail key={item.id} location={item} />
        )}
        onEndReached={() => {
          loadNext();
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
