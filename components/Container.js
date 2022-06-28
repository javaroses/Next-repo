export default function container({children}){
    return(
        <div className="container mx-auto lg:py-5 px-8 lg:px-16 xl:px-16">
            {children}
        </div>
    )
}