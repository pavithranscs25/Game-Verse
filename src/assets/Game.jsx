import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function Game() {

    const {id}=useParams();
    const [data, setData]=useState(null)
    //const navigate = useNavigate();

    useEffect(() => {
        fetch('/data.json')
        .then((data) => data.json())
        .then((data) => {
            const game = data.find((game) => game.id === Number(id));
            setData(game);})
        .catch((err) => console.log(err))
    },[id])

    if(!data){
        return(
            <h2>Game not found</h2>
        )
    }

    function addToWishlist(){
        localStorage.setItem("wishlist", JSON.stringify(data));
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
            <button onClick={() => {toast.success(`${data.title} added to your Wishlist!`)
                                    addToWishlist(data);
            }} className="cursor-pointer mt-8 bg-cyan-300 text-cyan-800 hover:bg-cyan-600 hover:text-cyan-950 px-6
                          py-3 rounded-xl font-bold transition duration:1000" >
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