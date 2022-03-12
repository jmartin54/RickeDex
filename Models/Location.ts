import Character from "./Character";

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [Character];
  url: string;
  created: string;
};
export default Location;
