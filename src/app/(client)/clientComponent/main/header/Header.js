"use client"
import Link from "next/link";

import Navbar from "./Navbar";
import SearchComponent from "../../utils/SearchComponent";
import TopHeader from './TopHeader';
import Image from 'next/image';
export default function Header() {
  return (
    <>
     
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <TopHeader />
      <div className="md:max-w-custom  mx-auto">
      
       
       <div className="grid grid-cols-12 w-full  text-white text-sm  ">
          <div className="col-span-2   ">
          <Link href="/" className="flex items-center w-full h-full">
              <Image
                src="/img/logo.svg"
                className=" mr-3 itemDark"
                alt="Flowbite Logo"
                width="500"
                height="500"

              />

            </Link>
          </div>
          <div className="col-span-10  ">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <div
            id="mega-menu-icons"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <Navbar />
          </div>
        
        </div>
          <div className="flex items-center md:order-2 w-full justify-end ">
          <div class="w-4/5">  <SearchComponent /></div>
          <div class="w-1/5">

          <div className="flex justify-end md:order-2">
            <Link
              href="/"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </Link>
            <Link
              href="/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

            </Link>
            <button
              data-collapse-toggle="mega-menu-icons"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-icons"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          </div>
         
            
              {/* <button
                data-collapse-toggle="mega-menu-icons"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-icons"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button> */}
            </div>
          </div>

        </div>
      </div>

       

      </nav>
    </>
  );
}
