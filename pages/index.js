import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "utils/posts.json";
import Head from "next/head";

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

export default function Home({ featured, posts: initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Javaroses</title>
      </Head>
      <Container>
        {featured && <FeaturedPost { ...featured} />}
        <div className="flex -mx-4 mt-4 flex-wrap">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 px-4 w-full py-5 ">
              <CardPost { ...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
