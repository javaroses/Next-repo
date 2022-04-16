import { useState } from "react";
import SectionHeader from "@components/sectionHeader";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "/utils/posts.json"

export default function Posts(){
    const [posts, setPosts]=useState([]);
    return(
    <Layout>

      <Container>
          <SectionHeader>Ui Designer</SectionHeader>
          {!posts.length?(   
              <div className="text-center">
              <h2 className="text-6xl py-2"> No result Bruh</h2>
              <p className="text-xl">We cant find any posts with keyword, 
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
          )}
      </Container>
    </Layout>
  );
}

    