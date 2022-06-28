import React from 'react'
import CardPost from "@components/CardPost";


export default function PostList({posts, 
  noresultTitle = "No result Bruh", 
  noresultDescription = "We cant find any posts with keyword please try another keyword"}) {
  return (
    <div className="flex -mx-4 flex-wrap mt-6">
      {!posts.length ?
              <div className="text-center py-20 mx-auto">
              <h2 className="text-6xl">{noresultTitle} </h2>
              <p className="text-xl text-black/60 md:w-6/12 mx-auto w-full ">{noresultDescription}</p>
              </div>
                  :
          posts.map(post => (
            <div key={post.id} className="md:w-4/12 px-6 w-full py-5">
              <CardPost {...post} />
              </div>
          ))}
          </div>
  )
}
