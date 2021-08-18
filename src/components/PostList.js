import PostItem from "../components/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostList({ posts, deletePost }) {
  return (
    <div className="posts">
      {posts.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "24px", margin: "20px" }}>
          No Posts!
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Post List </h1>

          <div>
            <TransitionGroup>
              {posts.map((p, index) => (
                <CSSTransition key={p.id} timeout={900} classNames="post">
                  <PostItem
                    number={index + 1}
                    post={{
                      id: p.id,
                      title: p.title,
                      body: p.body
                    }}
                    deletePost={deletePost}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      )}
    </div>
  );
}
