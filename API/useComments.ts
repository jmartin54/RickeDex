import { useState, useEffect } from "react";
import { Alert } from "react-native";
import Comment from "../Models/Comment";

const useComments = (commentableId: string) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${1}` // change to commentableId to pull data for this commentable
      );
      const json = await response.json();
      setComments(json);
    })();
  }, []);

  const addComment = (comment: Comment) => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: comment.title,
            body: comment.body,
            userId: comment.userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        Alert.alert("Uh oh! We couldn't save your comment!");
        return;
      }

      const json = (await response.json()) as Comment;
      setComments((prev) => [json, ...prev]);
    })();
  };

  return { comments, addComment };
};

export default useComments;
