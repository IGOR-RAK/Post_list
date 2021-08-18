import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/loader/Loader";

export default function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [coments, setComents] = useState([]);
  const [title, setTitle] = useState("");
  // console.log("params", params);

  const [fetchPost, isLoadingPost, errorPost] = useFetching(async (id) => {
    const res = await PostService.getPost(id);

    setPost(res.data);
  });

  const [fetchComments, isLoadingComments, errorComments] = useFetching(
    async (id) => {
      const res = await PostService.getComents(id);
      setComents(res.data);
    }
  );

  const postTitle = "";

  useEffect(() => {
    fetchPost(params.id);
    fetchComments(params.id);
  }, []);

  useEffect(() => {
    if (post.title) {
      const title = [...post.title]
        .map((el, index) => {
          if (index === 0) {
            return el.toUpperCase();
          }
          return el;
        })
        .join("");

      setTitle(title);
    }
  }, [post]);

  return (
    <div className="post_item_container">
      <div className="post_item">
        {errorPost && <h1>{errorPost}</h1>}
        {errorComments && <h1>{errorPost}</h1>}
        {isLoadingPost ? (
          <Loader />
        ) : (
          <div>
            <h1> {title} </h1>
            <h1> {postTitle} </h1>
            <div className="post_item_body"> {post.body} </div>
          </div>
        )}
      </div>

      <div className="post_item_comments">
        <h3 style={{ padding: "5px", marginTop: "10px" }}>Comments:</h3>
        {isLoadingComments ? (
          <Loader />
        ) : (
          <div>
            {coments.map((c, index) => (
              <div key={index} className="post_item">
                {/* <h4>{c.name}</h4> */}
                <div className="post_item_body">{c.body}</div>
                <div className="post_item_body">commented by:{c.email}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
