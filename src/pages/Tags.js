import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Tags() {
  const navigate = useNavigate();

  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

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
          Blog on <span className="text-blue-600 font-bold">#{tag}</span>
        </h1>
      </div>

      <Blog />
      <Footer />
    </div>
  );
}

export default Tags;
