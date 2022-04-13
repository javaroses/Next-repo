import InfoPost from "@components/InfoPost";
export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center" >
        <div className="px-4 w-8/12">
          <img src="/tumbler.jpg" className="rounded-lg aspect-video" />
        </div>
        <div className="w-4/12 px-4">
            <InfoPost
            category = "Ui design"
            date = "20/08/2020"
            title = "Understanding the power of the web"
            shortDecription = "Morbi vitae ante metus. Vestibulum fringilla scelerisque odio, ut accumsan mi ultrices eu. Nunc rhoncus lacus pellentesque arcu vulputate ornare. Sed id tempus urna. Integer sollicitudin "
            authorAvatar = "/avatar.jpg"
            authorName = "Rizki"
            authorJob = "Front End Developer"
            />
            
        </div>
      </div>
    </article>
  );
}
