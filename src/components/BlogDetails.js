import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails(props) {
  const post = props.post;
  return (
    <div className="my-4 border-2 border-blue-600 py-4 px-5">
      <NavLink
        to={`/blog/${post.id}`}
        className="text-xl hover:text-slate-700 font-bold mb-3"
      >
        {post.title}
      </NavLink>
      <p className="text-slate-600">
        By <span className="font-bold italic">{post.author}</span>
        {" on "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="text-slate-950 hover:text-slate-700 font-extrabold">
            {post.category}
          </span>
        </NavLink>
      </p>
      <p className="mb-2 text-slate-600 font-light">
        Posted on{" "}
        <span className="text-slate-950 font-medium">{post.date}</span>
      </p>
      <p className="mb-3 text-slate-800">{post.content}</p>
      <div className="flex flex-wrap gap-x-2 ">
        {post.tags.map((tag) => {
          return (
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <p className="text-blue-700 font-bold hover:cursor-pointer hover:text-blue-400">{`#${tag}`}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default BlogDetails;
