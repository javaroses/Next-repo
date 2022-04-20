import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "utils/posts.json";
import Head from "next/head";


export default function Home() {
  const [Posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Javaroses</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 mt-4 flex-wrap">
          {Posts.map(post => (
            <div key={post.id} className="md:w-4/12 px-4 w-full py-5">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
