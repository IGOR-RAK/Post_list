import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPost;
};

export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedPost(posts, sort);
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.includes(query.toLowerCase())
    );
  }, [query, sortedPost]);

  return sortedAndSearchedPost;
};
