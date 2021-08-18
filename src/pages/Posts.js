import { useEffect, useRef, useState } from "react";
// import Counter from "./components/Counter";
// import Input from "./components/Input";
// import ClassCounter from "./components/ClassCounter";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../UI/modal/MyModal";
import { MyButton } from "../UI/buttons/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
// import { UseObserver } from "../hooks/useObserwer";
// import { MySelect } from "../UI/select/MySelect";
// import Navbar from "../components/Navbar";
//import Pagination from "../UI/pagination/Pagination";

export default function Posts() {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [posts, setPosts] = useState([]);
  const [
    limit
    // setLimit
  ] = useState(10);
  const [page, setPage] = useState(1);
  const lastElem = useRef();
  const observer = useRef();
  const [fetchPosts, isPostLoading, error] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts([...posts, ...res.data]);
    const totalCount = res.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  //UseObserver(lastElem,page < totalPages, isPostLoading, ()=>{setPage(page+1)})

  useEffect(() => {
    if (isPostLoading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElem.current);
  }, [isPostLoading]);

  // async function fetchPosts() {
  //   isLoading(true);
  //   setTimeout(async () => {
  //     const posts = await PostService.getAll();
  //     setPosts(posts);
  //     setIsPostLoading(false);
  //   }, 5000);
  // }

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query); //array to map

  const create = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div>
      {/* <MyButton
        onClick={() => {
          setLimit(20);
        }}
      >
        20
      </MyButton> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px"
        }}
      >
        <MyButton
          onClick={() => {
            setVisible(true);
          }}
        >
          Add Post
        </MyButton>
      </div>

      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={create} setVisible={setVisible} />
      </MyModal>

      {/* <hr style={{ margin: "20px 0" }} /> */}

      <PostFilter filter={filter} setFilter={setFilter} />

      {/* <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Items Numbrt on the Page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "All Items" }
        ]}
      /> */}

      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px"
          }}
        >
          <Loader />
        </div>
      )}

      {error && <h1>{error}</h1>}
      <PostList posts={sortedAndSearchedPost} deletePost={deletePost} />
      <div ref={lastElem} style={{ height: "2px", background: "teal" }} />
    </div>
  );
}
