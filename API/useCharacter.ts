import { useEffect, useState } from "react";
import Character from "../Models/Character";

const useCharacter = (characterUrl: string) => {
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    let isSubscribed = true;

    (async () => {
      const res = await fetch(characterUrl);
      const json = await res.json();
      if (isSubscribed) setCharacter(json);
    })();

    return () => {
      isSubscribed = false;
    };
  }, []);
  return character;
};

export default useCharacter;
