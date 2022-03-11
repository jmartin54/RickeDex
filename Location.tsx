import { Text } from "react-native";
import { Location } from "./API";
type LocationProps = {
  location: Location;
};
export default function LocationDetail({ location }: LocationProps) {
  return (
    <>
      <Text key={location.id}>{location.name}</Text>
      {/* <Text>{location.residents.map((resident) => "a")}</Text> */}
    </>
  );
}
