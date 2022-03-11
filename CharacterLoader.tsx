import { useEffect } from "react";
import { Text } from "react-native";
import { Character, useCharacter } from "./API";
import CharacterPreview, { CharacterPreviewLoading } from "./CharacterPreview";

type CharacterLoaderProps = {
  apiUrl: string;
};
export default function CharacterLoader({ apiUrl }: CharacterLoaderProps) {
  const character = useCharacter(apiUrl);
  return (
    <>
      {character === null ? (
        <CharacterPreviewLoading />
      ) : (
        <CharacterPreview character={character as Character} />
      )}
    </>
  );
}
