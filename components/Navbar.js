import { useState } from "react";
import Container from "@components/Container";
import Link from "next/link";
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownlist = [
    { text: "Internet", href: "/posts" },
    { text: "Open Source", href: "/posts" },
    { text: "Books", href: "/posts" },
  ];
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12 ">
            <Link href="/">
              <a className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">j</div>
                javaroses
              </a>
            </Link>
          </div>
          <div className="w-3/12 text-right lg:hidden">
            <button onClick={() => setSearch(!search)}>
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-500 to-gray-700 lg:bg-none lg:static fixed top-0 h-full lg:h-auto p-10 p-0 transition-all 
          ${offcanvas ? "left-0" : "-left-full"}`}
          >
            <button className="absolute top-10 right-10 lg:hidden" onClick={() => setOffcanvas(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="lg:space-x-14 flex lg:items-center flex-col mt-10 ml-10 lg:mt-0 lg:ml-0 lg:flex-row space-y-4 lg:space-y-0">
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Ui design</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Front end</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Back end</a>
                </Link>
              </li>
              <li className="relative">
                <a className="hove:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropdown)}>
                  lainnya
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded mt-5 shadow-2xl">
                    {dropdownlist.map(({ text, href }) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <Link href={href}>
                        <a href={href} className="flex py-3 px-6 hover:bg-gray-700/60">
                          {text}
                        </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className={`lg:w-3/12 fixed w-full left-0 px-10 lg:px-0 lg:static transition-all ${search ? "top-10" : "-top-40"}`}>
            <input type="text" autoComplete="off" className="bg-cyan-700 py-3 px-6 w-full lg:rounded-full rounded-lg border-none bg-search pl-14" placeholder="search ..." />
            <button className="absolute top-3 right-12 lg:hidden " onClick={() => setSearch(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
