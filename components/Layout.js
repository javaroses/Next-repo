import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({children, categories}){
    return(
     <div className="bg-gradient-to-b from-cyan-800 to-gray-800 min-h-screen text-white">
      <Navbar categories={categories}/>
      {children}
      <Footer/>
        </div>
    )
}