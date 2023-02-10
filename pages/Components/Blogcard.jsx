import Link from "next/link";
import React from "react";

const Blogcard = (props) => {
  return (
    <Link
      href={`/blogs/${props.id}`}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4"
    >
      <div>
        <i className="fa-solid fa-pencil"></i>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.content != undefined
          ? props.content.substring(0, 160) + "...."
          : "See more"}
      </p>
    </Link>
  );
};

export default Blogcard;
