import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Game() {

    const {id}=useParams();
    const [data, setData]=useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/games/${id}`)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            setData(data);})
        .catch((err) => console.log(err))
    },[id])

    if(!data){
        return(
            <h2>LOADIND...</h2>
        )
    }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto bg-slate-900 rounded-xl
                      p-8 flex gap-10 shadow-xl">
        <img src={data.image} className="w-[750px] h-[400px] object-cover rounded-xl" />
        <div>
            <h1 className="text-4xl font-bold">
                {data.title}
            </h1>
            <p className="text-gray-400 mt-3">
                {data.genre}
            </p>
            <div className="mt-3 flex gap-2">
                <p>Developer:</p> 
                <p className="text-cyan-400">
                    {data.developer}
                </p>
            </div>
            <div className="mt-3 flex gap-2">
                <p>Release date:</p>
                <p className="text-cyan-400">{data.releaseDate}</p>
            </div>
            <div className="mt-5 text-yellow-400 text-xl">
            ⭐ {data.rating} / 5
            </div>
            <button className="cursor-pointer mt-8 bg-cyan-300 text-cyan-800 hover:bg-cyan-600 hover:text-cyan-950 px-6
                          py-3 rounded-xl font-bold transition duration:1000">
                Add to Wishlist
          </button>

        </div>

      </div>
      <div>

      </div>

    </div>
  )
}

export default Game