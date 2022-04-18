import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
export default function InfoPost({ category, date, title, shortDecription, authorAvatar, authorName, authorJob }) {
return (
    <>
      <PostMetaTitle
      category={category}
      date={date}
      title={title }
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
