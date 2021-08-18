import { MyButton } from "../UI/buttons/MyButton";
import { MyInput } from "../UI/inputs/MyInput";
import { useState } from "react";

export default function PostForm({ create, setVisible }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: "", body: "" });
    setVisible(false);
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
        placeholder={"Title"}
      />
      <MyInput
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
        placeholder={"Body"}
      />
      <MyButton onClick={addNewPost}>Create new Post</MyButton>
    </form>
  );
}
