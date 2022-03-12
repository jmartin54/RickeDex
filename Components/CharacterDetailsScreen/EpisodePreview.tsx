import { View, StyleSheet, Text } from "react-native";
type EpisodePreviewParams = {
  url: string;
};
export default function EpisodePreview({ url }: EpisodePreviewParams) {
  const clean = (url: string) =>
    url.replace("https://rickandmortyapi.com/api/episode/", "");
  return (
    <View style={styles.episode}>
      <Text>{clean(url)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  episode: {
    padding: 8,
    margin: 2,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
  },
});
