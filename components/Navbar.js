import { useState } from "react";
import Container from "@components/Container";
import Link from "next/link";
import Router from "next/router";

export default function Navbar({ categories }) {
  const [keyword, setKeyword] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const items = categories.map((category) => ({ name: category.name, href: `/category/${category.slug}` }));

  function doSearch(e) {
    e.preventDefault();

    Router.push({
      pathname: "/search",
      query: {
        q: keyword,
      },
    });
  }

  
  return (
    <nav className="py-5 lg:py-0 ">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="w-6/12 flex items-center justify-center lg:justify-start cursor-pointer ">
            <a>
              <Link href="/">
                <div>
                  <img alt="gambar" src="/icon.svg" width={60} height={60} />
                </div>
              </Link>
            </a>
          </div>
          
          <div className="w-3/12 text-right lg:hidden">
            <button onClick={() => setSearch(!search)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-4/12 w-full bg-gradient-to-b from-gray-500 to-gray-700 lg:bg-none lg:static fixed top-0 h-full lg:h-auto p-10 transition-all 
          ${offcanvas ? "left-0" : "-left-full"}`}
          >
            <button className="absolute top-10 right-10 lg:hidden" onClick={() => setOffcanvas(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <ul onClick={() => setOffcanvas(false)} className="lg:space-x-14 flex lg:items-center flex-col mt-10 ml-10 lg:mt-0 lg:ml-0 lg:flex-row space-y-4 lg:space-y-0 justify-center">
              {items.map((item) => (
                <li className="py-2 lg:border-b-2 border-white hover:border-black" key={item.name}>
                  <Link href={item.href}>
                    <a className="lg:text-black font-medium text-white">{item.name}</a>
                  </Link>
                </li>
              ))}
              {/* 

              pb-3 border-b border-white hover:border-black

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
              </li> */}
            </ul>
          </div>
          <div className={`lg:w-2/12 fixed w-full left-0 px-8 lg:px-4 lg:static transition-all ${search ? "top-5" : "-top-40"}`}>
            <form onSubmit={doSearch}>
              <input
                type="text"
                autoComplete="off"
                className="bg-gray-200 py-2 w-full lg:h-10 h-14 lg:rounded-full rounded-lg outline-none bg-search pl-12 pr-10 lg:pr-5"
                placeholder="search ..."
                onChange={(e) => setKeyword(e.target.value)}
              />
            </form>
            <button className="absolute top-4 right-[42px] lg:hidden " onClick={() => setSearch(false)}>
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
