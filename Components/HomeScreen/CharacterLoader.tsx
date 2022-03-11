import Character from "../../Models/Character";
import useCharacter from "../../API/useCharacter";
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
