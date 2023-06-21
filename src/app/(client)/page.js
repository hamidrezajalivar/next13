"use client";
import Image from "next/image";


import Footer from "../../../components/Footer";
import CardBlog from "../../../components/CardBlog";
import axios from "axios";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const pageSize = 4;
export const metadata = {
  title: "text meta tags ",
  description: "Generated by create next app",
};
const Home = async () => {
  const postsData = await fecthPosts();
  // const [currentPage, setCurrentPage] = useState(1);
  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  // };

  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const currentPageItems = postsData.slice(startIndex, endIndex);
  return (
    <>
      <div className="block md:flex justify-center w-full  flex-wrap">
        {postsData.map((post) => (
          <div className="md:w-1/4  w-full p-5" key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className="singleCardPost ">
                <Image src={post.imageUrl} alt="" width="500" height="160" />
                <h1 className="text-lg">{post.title} </h1>
                <p className="text-sm">{post.body}</p>
                <button type="btn" className="btnMore ">
                  click more
                </button>
              </div>
            </Link>
          </div>
        ))}

        {/* <Pagination
          count={postsData.length}
          page={1}
          rowsPerPage={10}
          color="primary"
        /> */}
      </div>
      <CardBlog />
      <Footer />
    </>
  );
};
export default Home;
async function fecthPosts() {
  const { data } = await axios.get("http://localhost:3001/posts");
  return data;
}
