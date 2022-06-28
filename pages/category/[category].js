import { useState } from "react";
import SectionHeader from "@components/sectionHeader";
import Container from "@components/Container";
// import Layout from "@components/Layout";
import mockPosts from "/utils/posts.json"
import Head from "next/head";
import PostList from "@components/PostList";

export async function getServerSideProps({params: {category: categorySlug} }) {
  const reqCategory = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories?slug=" + categorySlug);
  const category = await reqCategory.json();
  const reqPosts = await fetch(process.env.NEXT_PUBLIC_APIURL + "/posts?_where[category.slug]=" + categorySlug);
  const posts = await reqPosts.json();


  return {
    props: {
      posts,
      category: category.length > 0 ? category[0]:{}
    },
  };
}
export default function Posts({posts, category}){
    return(
    <>
       <Head>
        <title>{category.name} &mdash; Javaroses</title>
      </Head>
      <Container>
          <SectionHeader>{category.name}</SectionHeader>
          <PostList posts={posts}
          noresultTitle="No Posts 🥺"
          noresultDescription="No Posts in This Category" 
          />
          
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

    