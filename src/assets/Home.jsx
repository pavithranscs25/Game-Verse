import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Home() {

    const navigate = useNavigate();
    const [value, setValue]=useState("");
    const [games, setGames]=useState([]);
    const [dup, setDup]=useState([]);

    useEffect(() => {
            fetch('/data.json')
            .then((data) => data.json())
            .then((data) => {
                setGames(data);
                setDup(data);
            })
            .catch((err) => console.log(err))
        }, []);

        function showResult(){
            if(value === "General"){
                setGames(dup);
            }
            else{
                setGames(dup.filter((game) => game.genre.toLowerCase().includes(value.toLowerCase())));
            }
        }
        function handleInput(input){
            if(input === ""){
                setGames(dup);
            }
            else{
                setGames(dup.filter((game) => game.title.toLowerCase().includes(input.toLowerCase())));
            }
        }

  return (
    <>
        <Navbar/>
        <div className="flex items-center justify-center gap-4 py-8">
            <input onChange={
                (e) => {handleInput(e.target.value)}
            }type="text" placeholder='🔍🎮 Search'
                   className="bg-color block w-96  p-3 rounded-xl shadow-lg m-10"/>
        
            <select name="" id="" onChange={(e) => setValue(e.target.value)} className="text-slate border border-slate-400 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="General">All games</option>
                <option value="Action Adventure">Aventures Games</option>
                <option value="Battle Royale">Battle Royale Games</option>
                <option value="Sports">Sports Games</option>
            </select>
            <button onClick = {showResult} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/40 cursor-pointer">Show Results</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-12">
            {games.length === 0 ? (
                <div className="col-span-full text-center mt-10">
                    <h2 className="text-xl font-semibold">
                        No games found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try your search again.
                    </p>
                </div>
            ) : (
            games.map((game) => {
                return(
                    <div key={game.id} className="games h-[200px] w-[300px] bg-slate-900 text-white rounded-xl p-5
                        shadow-lg border border-slate-700 hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
                         onClick={() => navigate(`/Game/${game.id}`)}>
                        <img src={game.image} alt="" className="h-[130px] w-full object-cover rounded-lg"/>
                        <h2 className="title">{game.title}</h2>
                    </div>
                );
            })
        )}
        </div>
    </>
  )
}

export default Home