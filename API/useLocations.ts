import { useEffect, useState } from "react";
import Location from "../Models/Location";
import LocationRequestInfo from "../Models/LocationRequestInfo";

const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [info, setInfo] = useState<LocationRequestInfo | null>(null);

  useEffect(() => {
    load("https://rickandmortyapi.com/api/location");
  }, []);

  const load = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    // setLocations((prev) => [...prev, ...json.results]); // TODO: this could cause problems
    setLocations(json.results);
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

export default useLocations;
