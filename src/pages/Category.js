import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Category() {
  const navigate = useNavigate();

  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div className="flex flex-col items-center w-9/12 mx-auto">
      <Header />
      <div className="flex justify-start w-full items-center gap-x-2">
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-600 py-2 px-4 text-white rounded-md hover:bg-slate-950"
        >
          Back
        </button>
        <h1 className="text-2xl font-semibold">
          Blogs on{" "}
          <span className="text-black underline font-bold"> {category}</span>
        </h1>
      </div>
      <Blog />
      <Footer />
    </div>
  );
}

export default Category;
