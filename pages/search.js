import { useState } from "react";
import SectionHeader from "@components/sectionHeader";
import Container from "@components/Container";
// import Layout from "@components/Layout";
import mockPosts from "/utils/posts.json";
import Head from "next/head";
import PostList from "@components/PostList";

export async function getServerSideProps({ query:{q} }) {
  const reqPosts = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?title_contains=' + q);
  const posts = await reqPosts.json();
    
//   if (!posts.length)
//     return {
//       notFound: true
//     };
  return {
    props: {
      posts,
      q
    },
  };
}

export default function Search({ posts,q }) {
  return (
    <>
      <Head>
        <title> Search &mdash; Javaroses</title>
      </Head>
      <Container>
        <SectionHeader>Search: {q}</SectionHeader>
        <PostList posts={posts} />

        {/* {!posts.length?(   
              <div className="text-center py-20">
              <h2 className="text-6xl"> No result Bruh</h2>
              <p className="text-xl text-white/60 md:w-6/12 mx-auto w-full ">We cant find any posts with keyword, 
                  please try another keyword</p>
              </div>  
          ):(
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post1 => (
            <div key={post1.id} className="md:w-4/12 px-4 w-full py-5">
              <CardPost {...post1} />
              </div>
          ))}
          </div>
          )} */}

      </Container>
    </>
  );
}
