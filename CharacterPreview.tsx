import { Text } from "react-native";
import { Character } from "./API";
type CharacterPreviewProps = {
  character: Character;
};
export default function CharacterPreview({ character }: CharacterPreviewProps) {
  return <Text>{character.name}</Text>;
}
