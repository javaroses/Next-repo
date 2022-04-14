import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "../utils/post.json";


export default function Home() {
  const [Posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 mt-4 flex-wrap">
          {Posts.map((post) => (
            <div key={Posts.id} className="md:w-4/12 px-4 w-full py-5">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
