import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function FeaturedPost({
  title, 
  category,
  published_at,
  thumbnail,
  headline,
  author,
  slug
}) {
  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap" >
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href={`/${slug}`}>
          <a>
          <img alt="gambar" src={process.env.NEXT_PUBLIC_APIURL + thumbnail.formats.medium.url} className="rounded-lg aspect-video" />
          </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4 mt-2">
            <InfoPost
            category = {category.name}
            date = {category.published_at}
            title = {title}
            slug= {slug}
            shortDecription = {headline}
            authorAvatar ={process.env.NEXT_PUBLIC_APIURL + author.avatar.url}
            authorName = {author.name}
            authorJob = {author.job}
            />
            
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden"/>
    </article>
  );
}
