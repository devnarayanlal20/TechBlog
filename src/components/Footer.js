import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { page, totalpages, changePageHandler } = useContext(AppContext);
  return (
    <div className="flex flex-row mx-auto w-full mb-4 justify-between items-center">
      <div className="flex gap-x-3">
        {page > 1 && (
          <button
            onClick={() => changePageHandler(page - 1)}
            className="bg-slate-600 py-2 px-4 text-white rounded-md hover:bg-slate-950"
          >
            Previous
          </button>
        )}
        {page < totalpages && (
          <button
            onClick={() => changePageHandler(page + 1)}
            className="bg-slate-600 py-2 px-4 text-white rounded-md hover:bg-slate-950"
          >
            Next
          </button>
        )}
      </div>
      <div className="">
        <p className="text-lg text-black font-semibold">{`${page} of ${totalpages} pages`}</p>
      </div>
    </div>
  );
}

export default Footer;
