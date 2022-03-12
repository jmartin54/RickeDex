const loadCharacters = async (characterIds: [number]) => {
  const characterPath = characterIds.join(",");
  const url = `https://rickandmortyapi.com/api/character/${characterPath}`;
  const response = await fetch(url);
  const characters = await response.json();
  if (characterIds.length == 1) return [characters];
  return characters;
};

export default loadCharacters;
