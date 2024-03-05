import React, { useContext } from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";

function Home() {
  const { loading } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center w-9/12 mx-auto">
      <Header />
      <Blog />
      {!loading && <Footer />}
    </div>
  );
}

export default Home;
