import { useState } from "react";
import Container from "@components/Container";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const dropdownlist = [
    { text: "Internet", href: "#" },
    { text: "Open Source", href: "#" },
    { text: "Books", href: "#" },
  ];
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={()=> {setOffcanvas(!offcanvas)}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12 flex items-center justify-center justify-start">
            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-xl">e</div>
            javaroses
          </div>
          <div className="w-3/12 text-right lg:hidden">
            <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-500 to-gray-700 fixed top-0 h-full p-10 transition-all ${offcanvas? "left-0":"-left-full"}`}>
            <button className="absolute top-10 right-10"
            onClick={()=>{setOffcanvas(false)}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <ul className="lg:space-x-10 flex lg:items-center flex-col space-y-2">
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
                  <ul className="absolute w-[200px] bg-gray-800 rounded mt-5 shadow-2xl">
                    {dropdownlist.map(({ text, href }) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <a href={href} className="flex py-3 px-6 hover:bg-gray-700/60">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="w-3/12 hidden">
            <input type="text" autoComplete="off" className="bg-gray-700 py-3 px-6 w-full rounded-full border-none bg-search pl-14" placeholder="search ..." />
          </div>
        </div>
      </Container>
    </nav>
  );
}
