import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import useComments from "../../API/useComments";
import Comment from "../../Models/Comment";

type CommentSectionProps = {
  commentableId: string;
};

export default function CommentSection({ commentableId }: CommentSectionProps) {
  const { comments, addComment } = useComments(commentableId);

  const [title, onChangeTitle] = useState("");
  const [body, onChangeBody] = useState("");

  const createComment = () => {
    let comment: Comment = { title: title, body: body, userId: commentableId };
    addComment(comment);
  };

  return (
    <>
      <View style={styles.addCommentSection}>
        <Text style={styles.commentTitle}>Add a comment:</Text>
        <TextInput
          style={styles.comment}
          placeholder="Comment Title"
          value={title}
          onChangeText={onChangeTitle}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.comment}
          placeholder="Comment Body"
          value={body}
          onChangeText={onChangeBody}
        />
        <TouchableOpacity style={styles.button} onPress={createComment}>
          <Text>Add Comment</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.commentTitle}>Comments:</Text>
      {comments.map((comment: Comment) => (
        <View style={styles.comment}>
          <Text style={styles.commentTitle}>{comment.title}</Text>
          <Text>{comment.body}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  addCommentSection: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#ddd",
    padding: 4,
    margin: 4,
  },
  button: {
    backgroundColor: "steelblue",
    padding: 8,
    margin: 4,
    alignItems: "center",
    borderRadius: 4,
  },
  comment: {
    backgroundColor: "white",
    fontSize: 12,
    borderColor: "black",
    borderWidth: 1,
    margin: 4,
    padding: 4,
    borderRadius: 4,
    alignSelf: "stretch",
  },
  commentTitle: {
    fontWeight: "600",
  },
});
