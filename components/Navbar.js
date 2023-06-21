"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="flex w-full justify-between">
        <div className="w-2/3 ">
          <ul className="hidden gap-12  md:flex">
            <li className="w-1/6 px-8">
              <Link href="/">Home</Link>
            </li>
            <li className="w-1/6 px-8">test2</li>
            <li className="w-1/6 px-8">test3</li>
            <li className="w-1/6 px-8">test4</li>
            <li className="w-1/6 px-8">test5</li>
            <li className="w-1/6 px-8">test6</li>
          </ul>
        </div>
        <div className="w-1/3 text-left">
          <button
            type="button"
            className="border-1  rounded-lg  	
        border-gray-900 border-solid text-sm"
          >
            login{" "}
          </button>
        </div>
      </nav>
    </>
  );
}
