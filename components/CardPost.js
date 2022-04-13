import InfoPost from "./InfoPost"
export default function CardPost({thumbnail, ...infopost}){
    return(
        <article>
            <img  className="w-full rounded aspect-video mb-4 " src={thumbnail} />
            <InfoPost { ...infopost}/>

        </article>
    )
}