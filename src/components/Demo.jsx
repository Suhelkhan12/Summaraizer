import { useState, useEffect } from "react";
import { AiOutlineEnter } from "react-icons/ai";

import { linkIcon, loader, copy, tick } from "../assets/index";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a url"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn peer-focus:text-gray-700">
            <AiOutlineEnter />
          </button>
        </form>

        {/* browsing history */}
      </div>
      {/* showing result */}
    </section>
  );
};

export default Demo;
