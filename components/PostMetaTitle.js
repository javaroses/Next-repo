export default function PostMetaTitle({category,title,date}) {
  return (
    <>
      <div className="flex items-center text-white/60 ">
        <div className="uppercase mr-2">{category}</div>
        &bull;
        <div className="ml-2">{date}</div>
      </div>
      <h2 className="text-2xl mt-4">{title}</h2>
    </>
  );
}
