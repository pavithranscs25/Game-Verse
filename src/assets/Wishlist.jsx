import React from 'react'
import Navbar from './Navbar'

function Wishlist() {

  const game = JSON.parse(localStorage.getItem("wishlist"));

  return (
    <div>
      <Navbar/>
       <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-4xl font-bold mb-8">
                My Wishlist
            </h1>

            {game && (
                <div className="bg-slate-900 p-5 rounded-xl w-80">

                    <img
                        src={game.image}
                        className="w-full h-48 object-cover rounded-xl"
                    />

                    <h2 className="text-2xl font-bold mt-4">
                        {game.title}
                    </h2>

                    <p className="text-gray-400 mt-2">
                        {game.genre}
                    </p>

                    <p className="text-cyan-400 mt-2">
                        ⭐ {game.rating}
                    </p>

                </div>
            )}

        </div>
    </div>
  )
}

export default Wishlist