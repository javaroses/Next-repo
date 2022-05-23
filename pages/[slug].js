import Container from "@components/Container";
import Layout from "@components/Layout";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import Head from "next/head";
import { formatDate } from "utils/utils";

export async function getServerSideProps({ params: { slug } }) {
  const reqDetail = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?slug=' + slug);
  const single = await reqDetail.json();

  if (!single.length)
  return {
    notFound: true
  };
 
  return {
    props: {
      single: single.length > 0 ? single[0] : {}
    },
  };
}

export default function Detail({ 
  single:{Title, 
  slug, 
  category,
  published_at,
  thumbnail,
  headline,
  content,
  author
}}) {
  return (
    <Layout>
      <Container>
        <Head>
          <title>{Title} &mdash; Javaroses</title>
        </Head>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle 
          category={category.name}
          date={formatDate(published_at)}
          title={Title} 
          slug={slug} 
          />
          <PostAuthor 
          authorAvatar={process.env.NEXT_PUBLIC_APIURL + author.avatar.url}
          authorName={author.name}
          authorJob={author.job}
          />
        </div>
        <div className="md:w-10/12 w-full flex item-center mx-auto my-10">
          <img src={process.env.NEXT_PUBLIC_APIURL + thumbnail.formats.large.url} className="w-full rounded-2xl" alt="" />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-2xl mb-4 ">
            {headline}
          </p>
          <p className="mb-4 ">
           {content}
          </p>
        </div>
      </Container>
    </Layout>
  );
  }