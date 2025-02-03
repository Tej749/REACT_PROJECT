function Card({blog}) {
    
    return (

        <a className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src={"http://localhost:3000/" + blog.image } className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{blog.game}</h4>
        <p className="mt-2 text-gray-600">{blog.player}
        </p>
        <h1>{blog.add}</h1>
    </div>
</a>
    )
}

export default Card