import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <nav className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-2/12 flex items-center">
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-xl">e</div>
            </div>
            <div className="w-8/12">
              <ul className="space-x-10 flex items-center ">
                <li>
                  <a href="" className="hover:underline">
                    Ui design
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Front end
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Back end
                  </a>
                </li>
                <li className="relative">
                  <a className="hove:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropdown)}>
                    lainnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {dropdown && (
                    <ul className="absolute w-[200px] bg-gray-700 rounded mt-5 shadow-2xl">
                      <li>
                        <a href="" className="flex py-3 px-2 border-b border-white/5 hover:bg-gray-600">
                          internet
                        </a>
                      </li>
                      <li>
                        <a href="" className="flex py-3 px-2 border-b border-white/5 hover:bg-gray-600">
                          books
                        </a>
                      </li>
                      <li>
                        <a href="" className="flex py-3 px-2 border-b border-white/5">
                          opensource
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="w-2/12">
              <input type="text" className="bg-gray-700 py-3 px-6 w-full rounded-full bg-search pl-12" placeholder="search ..." />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
