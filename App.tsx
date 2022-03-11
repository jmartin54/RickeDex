import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterDetailsScreen from "./Navigation/CharacterDetailsScreen";
import HomeScreen from "./Navigation/HomeScreen";

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
