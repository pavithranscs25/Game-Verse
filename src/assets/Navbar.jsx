import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-200 bg-black border-b border-slate-800 shadow-lg">
        <div className="flex items-center justify-between py-6 px-[45px]">
            <h2 className="text-3xl font-bold text-white tracking-wide cursor-pointer hover:text-purple-400 transition-colors duration-300">🎮 Game Verse</h2>
        </div>
        <div className="flex items-center gap-6">
            <NavLink to="/"className={({isActive}) => isActive ? "bg-white text-black px-4 py-2 rounded-lg" : "text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300"}>Home</NavLink>
            <NavLink to="/Wishlist" className={({isActive}) => isActive ? "bg-white text-black px-4 py-2 rounded-lg": "text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300"}>Wishlist</NavLink>
            <NavLink className="hover:bg-white hover:text-black px-4 py-2 rounded-lg text-white cursor-pointer transition-colors duration-300">Comments</NavLink>
        </div>
    </nav>
  )
}

export default Navbar