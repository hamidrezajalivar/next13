"use client";
import Image from "next/image";

import BannerSlider from "./clientComponent/slider/BannerSlider";
import axios from "axios";
import Link from "next/link";
import ProductSlider from './clientComponent/product/ProductSlider';
import { useState } from "react";
import ChildBanner from './clientComponent/banner/ChildBanner';
import CategorySlider from './clientComponent/category/CategorySlider';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const metadata = {
  title: "text meta tags ",
  description: "Generated by create next app",
};
const Home = async () => {
  const postsData = await fecthPosts();

  return (
    <>
      <div className="grid grid-cols-5 gap-4 my-10">
        <div className="col-span-5 sm:col-span-3 ">
          <BannerSlider />
        </div>
        <div className="col-span-5 sm:col-span-2">

          <ChildBanner/>
         </div>
      </div>
      <div className="w-full">
      <CategorySlider/>
      </div>
      <div className="w-full">
      <ProductSlider/>
      </div>
      <div className="block md:flex justify-center w-full  flex-wrap">
        {postsData.map((post) => (
          <div className="md:w-1/4 w-full p-5" key={post.id}>
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
    </>
  );
};
export default Home;
async function fecthPosts() {
  const { data } = await axios.get("http://localhost:3001/posts");
  return data;
}


// json-server --watch db.json --port 8000