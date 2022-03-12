import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from "react-native";
import { Character } from "./API";
type CharacterPreviewProps = {
  character: Character;
};

export default function CharacterPreview({ character }: CharacterPreviewProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CharacterDetails", { character })}
      style={styles.container}
    >
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.text}>{character.name}</Text>
    </TouchableOpacity>
  );
}

export function CharacterPreviewLoading() {
  return <View style={[styles.image, styles.loading]}></View>;
}

const styles = StyleSheet.create({
  container: { padding: 4 },
  loading: { backgroundColor: "#eee", margin: 4 },
  image: { width: 80, height: 70, borderRadius: 10 },
  text: { width: 80, fontSize: 12 },
});
