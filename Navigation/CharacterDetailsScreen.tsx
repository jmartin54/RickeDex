import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import CommentSection from "../Components/CharacterDetailsScreen/CommentSection";

export default function CharacterDetailsScreen({ route }) {
  const { character } = route.params;
  const post = () => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = await response.json();
      console.warn(JSON.stringify(json));
    })();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: character.image }}
          style={{ width: 150, height: 150 }}
        />
        <Text>
          {character.id} NAME: {character.name}
        </Text>
        <Text>STATUS: {character.status}</Text>
        <Text>SPECIES: {character.species}</Text>
        <Text>TYPE: {character.type}</Text>
        <Text>GENDER: {character.gender}</Text>
        <Text>ORIGIN: {character.origin.name ?? "Unknown"}</Text>
        <Text>LOCATION: {character.location.name ?? "Unknown"}</Text>
        <Text>EPISODES: </Text>
        {character.episode &&
          character.episode.map((url: string) => <Text>{url}</Text>)}
        <CommentSection commentableId={character.id} />
      </ScrollView>
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
