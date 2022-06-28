import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({children, categories}){
    return(
     <div className="bg-gradient-to-b from-white to-white min-h-screen text-black">
      <Navbar categories={categories}/>
      {children}
      <Footer/>
        </div>
    )
}