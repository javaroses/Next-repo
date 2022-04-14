export default function InfoPost({ category, date, title, shortDecription, authorAvatar, authorName, authorJob }) {
return (
    <>
      <div className="flex items-center text-white/60 ">
        <div className="uppercase mr-2">{category}</div>
        &bull;
        <div className="ml-2">{date}</div>
      </div>
      <h2 className="text-2xl mt-4">{title}</h2>
      <p className="text-white/60 mt-4">
        {shortDecription}
      </p>
      <div className="flex items-center mt-4">
        <img src={authorAvatar} className="w-10 h-10 rounded-full object-cover" />
        <div className="ml-4">
          <h3> {authorName}</h3>
          <div className="text-white/60 text-sm">{authorJob}</div>
        </div>
      </div>
    </>
  );
}
