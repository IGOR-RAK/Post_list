import { useHistory } from "react-router-dom";

import { MyButton } from "../UI/buttons/MyButton";

export default function PostItem({ number, post, deletePost }) {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {number}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton
          style={{ margin: "0 2px" }}
          onClick={() => {
            router.push(`/posts/${post.id}`);
          }}
        >
          Open
        </MyButton>
        <MyButton
          onClick={() => {
            deletePost(post.id);
          }}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
}
