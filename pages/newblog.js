import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Router, useRouter } from "next/router";

const newblog = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const blogsCollectionRefrence = collection(db, "blogs");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addDoc(blogsCollectionRefrence, {
      title: data.title,
      content: data.content,
    });

    router.push("/");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />

      <div className="py-[7rem] w-4/5 mx-auto">
        <form className="my-[4rem]" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Blog Title"
              required
            />
          </div>

          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Content
          </label>
          <textarea
            id="content"
            name="content"
            value={data.content}
            onChange={handleChange}
            rows="10"
            className=" h-full block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Blog Content..."
          ></textarea>

          <button
            type="submit"
            className="text-white my-4 mx-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save &#38; publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default newblog;
