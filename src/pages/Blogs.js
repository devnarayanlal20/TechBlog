import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BASE_API_URL from "../baseUrl";
import BlogDetails from "../components/BlogDetails";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function Blogs() {
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const navigate = useNavigate();

  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${BASE_API_URL}/get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.error(error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center w-9/12 mx-auto">
      <Header />
      <div>
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-600 py-2 px-4 text-white rounded-md hover:bg-slate-950"
        >
          Back
        </button>
        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h1 className="text-center text-3xl tracking-wide font-bold my-5">
              Related Blogs
            </h1>
            {relatedBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>NO Blog Found</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
