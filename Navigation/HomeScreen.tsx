import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import useLocations from "../API/useLocations";
import LocationDetail from "../Components/HomeScreen/LocationDetail";

export default function HomeScreen() {
  const { locations, loadNext } = useLocations();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => `${index}${item.id}`}
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
});
