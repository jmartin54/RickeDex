import { useState, useEffect } from "react";
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
      console.warn(JSON.stringify(json));
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
      const json = await response.json();
      console.warn(JSON.stringify(json));
    })();
  };

  return { comments, addComment };
};

export default useComments;
