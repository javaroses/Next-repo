import Link from "next/link";
import InfoPost from "./InfoPost";
export default function CardPost(props) {
  console.log(props);
  return (
    <article>
      <Link href="/detail">
        <a>
          <img className=" w-full rounded aspect-video mb-4 " src={ process.env.NEXT_PUBLIC_APIURL + props.thumbnail.formats.medium.url} />
        </a>
      </Link>
      <InfoPost
        category={props.category.name}
        date={props.category.published_at}
        title={props.title}
        shortDecription={props.headline}
        authorAvatar={process.env.NEXT_PUBLIC_APIURL + props.author.avatar.url}
        authorName={props.author.name}
        authorJob={props.author.job}
      />
    </article>
  );
}
