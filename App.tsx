import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { useLocations } from "./API";
import LocationDetail from "./LocationDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
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

function CharacterDetailsScreen({ route }) {
  const { character } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: character.image }}
        style={{ width: 150, height: 150 }}
      />
      <Text>NAME: {character.name}</Text>
      <Text>STATUS: {character.status}</Text>
      <Text>SPECIES: {character.species}</Text>
      <Text>TYPE: {character.type}</Text>
      <Text>GENDER: {character.gender}</Text>
      <Text>ORIGIN: {character.origin.name ?? "Unknown"}</Text>
      <Text>LOCATION: {character.location.name ?? "Unknown"}</Text>
      <Text>EPISODES: </Text>
      {character.episode &&
        character.episode.map((url: string) => <Text>{url}</Text>)}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
