import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import {formatDate} from "utils/utils";
export default function InfoPost({ category, date,title, slug, shortDecription, authorAvatar, authorName, authorJob }) {
return (
    <>
      <PostMetaTitle
      category={category}
      date={formatDate(date)}
      title={title}
      slug ={slug}
      />
      <p className="text-white/60 mt-4">
        {shortDecription}
      </p>
      <PostAuthor
      authorAvatar={authorAvatar}
      authorJob={authorJob}
      authorName={authorName}
      />
    </>
  );
}
