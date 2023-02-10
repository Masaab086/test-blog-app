import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-[10%] py-[2%] bg-[#F8F9FA] fixed top-0 w-full">
      <Link href={"/"}>
        <h3 className="font-extrabold text-2xl cursor-pointer">SimpleBlog</h3>
      </Link>
      <ul className="flex justify-between">
        <li className="mx-4 font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-4 font-bold">
          <Link href="/newblog">Create Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
