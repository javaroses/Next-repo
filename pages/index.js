import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import PostList from "@components/PostList";
import mockPosts from "utils/posts.json";
import Head from "next/head";
import LandingPage from "@components/LandingPage";
export async function getServerSideProps() {
  const reqFeatured = await fetch(process.env.NEXT_PUBLIC_APIURL + "/posts?featured=true");
  const featured = await reqFeatured.json();

  const reqPosts = await fetch(process.env.NEXT_PUBLIC_APIURL + "/posts?featured_ne=true");
  const posts = await reqPosts.json();

  return {
    props: {
      featured: featured.length > 0 ? featured[0] : false,
      posts
    },
  };
}

export default function Home({ featured, posts }) {
  return (
    <>
      <Head>
        <title>Home &mdash; Javaroses</title>
      </Head>
      <Container>
        <LandingPage/>
        {featured && <FeaturedPost { ...featured} />}
       <PostList posts={posts}/>
      </Container>
    </>
  );
}
