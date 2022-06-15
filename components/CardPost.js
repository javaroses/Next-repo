import Link from "next/link";
import InfoPost from "./InfoPost";


export default function CardPost(props) {
  return (
    <article>
      <Link href={`/${props.slug}`}>
        <a>
          <img src={ process.env.NEXT_PUBLIC_APIURL + props.thumbnail.url} className=" w-full rounded aspect-video mb-4 "  />
        </a>
      </Link>
      <InfoPost
        category={props.category.name}
        date={props.category.published_at}
        title={props.title}
        shortDecription={props.headline}
        slug= {props.slug}
        authorAvatar={process.env.NEXT_PUBLIC_APIURL + props.author.avatar.url}
        authorName={props.author.name}
        authorJob={props.author.job}
      />
    </article>
  );
}
  