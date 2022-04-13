import Head from "next/head";
import { useState } from "react";
import Navbar from "@components/Navbar";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Footer from "@components/Footer";

export default function Home() {
  const [Posts, setPosts] = useState([
    {
      id: 1,
      thumbnail: "/kamera.jpg",
      category: "Ui design",
      date: "20/08/2020",
      title: "Understanding the power of the web",
      shortDecription: "Morbi vita estibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna.",
      authorAvatar: "/avatar.jpg",
      authorName: "Rizki",
      authorJob: "Front End Developer",
    },
    {
      id: 2,
      thumbnail: "/book.jpg",
      category: "Ui design",
      date: "20/08/2020",
      title: "Understanding the power of the web",
      shortDecription: "Morbi vita estibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna.",
      authorAvatar: "/avatar.jpg",
      authorName: "Rizki",
      authorJob: "Front End Developer",
    },
    {
      id: 3,
      thumbnail: "/com.jpg",
      category: "Ui design",
      date: "20/08/2020",
      title: "Understanding the power of the web",
      shortDecription: "Morbi vita estibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna.",
      authorAvatar: "/avatar.jpg",
      authorName: "Rizki",
      authorJob: "Front End Developer",
    },
    {
      id: 4,
      thumbnail: "/work.jpg",
      category: "Ui design",
      date: "20/08/2020",
      title: "Understanding the power of the web",
      shortDecription: "Morbi vita estibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna.",
      authorAvatar: "/avatar.jpg",
      authorName: "Rizki",
      authorJob: "Front End Developer",
    },
    {
      id: 5,
      thumbnail: "/makita.jpg",
      category: "Ui design",
      date: "20/08/2020",
      title: "Understanding the power of the web",
      shortDecription: "Morbi vita estibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna.",
      authorAvatar: "/avatar.jpg",
      authorName: "Rizki",
      authorJob: "Front End Developer",
    },
    {
      id: 6,
      thumbnail: "/set.jpg ",
      category: "Ui design",
      date: "20/08/2020",
      title: "Understanding the power of the web",
      shortDecription: "Morbi vita estibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna.",
      authorAvatar: "/avatar.jpg",
      authorName: "Rizki",
      authorJob: "Front End Developer",
    },
  ]);
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />
        <div className="flex -mx-4 mt-4 flex-wrap">
          {Posts.map(post=>(
          <div key = {Posts.id} className="w-4/12 px-4 py-5">
            <CardPost {...post} />
          </div>
          ))}
        </div>
      </div> 
        <Footer />
    </div>
  );
}
