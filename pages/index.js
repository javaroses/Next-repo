import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "utils/posts.json";
import Head from "next/head";

export async function getServerSideProps(){
  const reqFeatured = await fetch(process.env.APIURL + '/posts?featured=true');
  let featured = await reqFeatured.json();

  if(featured.length < 1 ){
    featured = {}
  }
return{
  props:{
    featured: featured[0]
  }
}

}

export default function Home({featured}) {
 
  const [Posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Javaroses</title>
      </Head>
      <Container>
        <FeaturedPost 
        {...featured}
        />
        <div className="flex -mx-4 mt-4 flex-wrap">
          {Posts.map(post => (
            <div key={post.id} className="md:w-4/12 px-4 w-full py-5 ">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
