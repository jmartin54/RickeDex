import { useEffect, useState } from "react";
import Character from "../Models/Character";

const useCharacter = (characterUrl: string) => {
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(characterUrl);
      const json = await res.json();
      setCharacter(json);
    })();
  }, []);
  return character;
};

export default useCharacter;
