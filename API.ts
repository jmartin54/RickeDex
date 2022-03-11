import { useEffect, useState } from "react";

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [string];
  url: string;
  created: string;
};

export type LocationRequestInfo = {
  count: number;
  pages: number;
  next: string | undefined;
  prev: string | undefined;
};

const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [info, setInfo] = useState<LocationRequestInfo | null>(null);

  useEffect(() => {
    load("https://rickandmortyapi.com/api/location");
  }, []);

  const load = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    setLocations((prev) => [...prev, ...json.results]); // TODO: this could cause problems
    // setLocations(json.results);
    setInfo(json.info);
  };

  const loadPrev = () => {
    if (info?.prev !== undefined) load(info.prev);
  };

  const loadNext = () => {
    if (info?.next !== undefined) load(info.next);
  };

  return { info, locations, loadPrev, loadNext };
};

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

export { useLocations, useCharacter };
