import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import {
  Route,
  Router,
  Routes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Category from "./pages/Category";
import Blogs from "./pages/Blogs";

function App() {
  const { fetchBlogPost, loading } = useContext(AppContext);

  const [searchParam, setsearchParam] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParam.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), null, category);
    } else {
      fetchBlogPost(Number(page), null);
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<Blogs />} />
      <Route path="/tags/:tag" element={<Tags />} />
      <Route path="/categories/:category" element={<Category />} />
    </Routes>
  );
}

export default App;
