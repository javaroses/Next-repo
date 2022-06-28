import Link from "next/link";

export default function PostMetaTitle({ category, title, date, slug, center }) {
  return (
    <>
      <div className="flex items-center text-black/60 ">
        <div className="uppercase mr-2 ">{category}</div>
        &bull;
        <div className="ml-2">{date}</div>
      </div>
      <h2 className={`"text-2xl mt-4"${center ? "text-center" : ""}`}>
        {slug ? (
          <Link href={`/${slug}`}>
            <a>{title}</a>
          </Link>
        ) : (
          <>{title}</>
        )}
      </h2>
    </>
  );
}
