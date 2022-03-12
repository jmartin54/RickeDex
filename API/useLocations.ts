import { useEffect, useState } from "react";
import loadCharacters from "./useCharacter";
import Location from "../Models/Location";
import LocationRequestInfo from "../Models/LocationRequestInfo";

const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [info, setInfo] = useState<LocationRequestInfo | null>(null);

  useEffect(() => {
    load("https://rickandmortyapi.com/api/location");
  }, []);

  const load = async (url: string) => {
    try {
      setInfo(null);
      const response = await fetch(url);
      const json = await response.json();
      for (var i in json.results) {
        json.results[i].residents = await loadCharactersForLocation(
          json.results[i]
        );
      }
      setLocations((prev) => [...prev, ...json.results]);
      setInfo(json.info);
    } catch (err) {
      console.warn(err);
    }
  };

  const loadPrev = () => {
    if (info?.prev !== undefined) load(info.prev);
  };

  const loadNext = () => {
    if (info?.next !== undefined) load(info.next);
  };

  return { info, locations, loadPrev, loadNext };
};

const loadCharactersForLocation = async (location: Location) => {
  const characterIds = characterIdsFromResidentUrl(location.residents);
  const characters = await loadCharacters(characterIds);
  return characters;
};

const characterIdsFromResidentUrl = (residents: [string | number]) => {
  return residents.map(
    (resident) =>
      resident.replace("https://rickandmortyapi.com/api/character/", "") * 1
  );
};

export default useLocations;
