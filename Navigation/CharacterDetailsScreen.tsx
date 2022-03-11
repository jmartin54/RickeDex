import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
} from "react-native";
import CommentSection from "../Components/CharacterDetailsScreen/CommentSection";

export default function CharacterDetailsScreen({ route }) {
  const { character } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <View style={styles.container}>
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
              character.episode.map((url: string) => (
                <Text key={url}>{url}</Text>
              ))}
            <CommentSection commentableId={character.id} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
