import Link from "next/link"
import InfoPost from "./InfoPost"
export default function CardPost({thumbnail, ...infopost}){
    return(
        <article>
           <Link href="/detail">
               <a>
               <img  className="w-full rounded aspect-video mb-4 " src={thumbnail} />
               </a>
            </Link> 
            <InfoPost { ...infopost}/>

        </article>
    )
}