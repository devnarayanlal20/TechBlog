import { createContext, useState } from "react";
import BASE_API_URL from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState(null);
  const navigate = useNavigate();

  async function fetchBlogPost(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${BASE_API_URL}/get-blogs?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const data = await fetch(url);
      const blogData = await data.json();
      setPage(blogData.page);
      setPost(blogData.posts);
      setTotalpages(blogData.totalPages);
    } catch (error) {
      console.error(error);
      setPage(1);
      setPost([]);
      setTotalpages(null);
    }
    setLoading(false);
  }

  function changePageHandler(page) {
    navigate({ search: `?page=${page}` });
    setPage(page);
  }

  const value = {
    loading,
    setLoading,
    post,
    setPost,
    page,
    setPage,
    totalpages,
    setTotalpages,
    fetchBlogPost,
    changePageHandler,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
