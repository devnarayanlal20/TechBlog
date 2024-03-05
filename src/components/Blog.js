import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blog() {
  const { post, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <p>No Post</p>
        </div>
      ) : (
        post.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blog;
