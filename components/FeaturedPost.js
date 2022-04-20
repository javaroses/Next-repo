import InfoPost from "@components/InfoPost";
import Link from "next/link";
export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap" >
        <div className="px-4 lg:w-8/12 w-full md:w-7/12 w-full">
          <Link href="/detail">
          <a>
          <img src="/tumbler.jpg" className="rounded-lg aspect-video" />
          </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4 mt-4">
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
      <hr className="border-white/10 mt-10 md:hidden"/>
    </article>
  );
}
