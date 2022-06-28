
export default function PostAuthor({authorAvatar, authorJob, authorName}) {
  return (
    <div className="flex items-center mt-4">
      <img src={authorAvatar} className="w-10 h-10 rounded-full object-cover" />
      <div className="ml-4">
        <h3> {authorName}</h3>
        <div className="text-black/60 text-sm">{authorJob}</div>
      </div>
    </div>
  );
}
