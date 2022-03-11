import { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useLocations } from "../../API";

export default function CommentSection({ commentableId }) {
  // export default function HomeScreen() {
  const { locations, loadNext } = useLocations();
  const [comments, setComments] = useState([]);
  //   const [comments, setComments] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/posts?userId=${1}`
  //       );
  //       const json = await response.json();
  //       setComments(json);
  //       console.warn(JSON.stringify(json));
  //     })();
  //   }, []);

  //   const comments = [];
  const post = () => {};

  return (
    <>
      <Text>Comments:</Text>
      {locations.map((comment) => (
        <Text>{comment.name}</Text>
      ))}
      <TextInput />
      <TouchableOpacity onPress={post}>
        <Text>Add Comment</Text>
      </TouchableOpacity>
    </>
  );
}
