import React from "react"
import {useState, useEffect} from 'react'
import SearchController from "../components/SearchController"
import Search from "../components/Search"
import Results from "../components/Results"
import {Link} from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"

function PlayersSearch(props){
//     const [players, setPlayers] = useState(null)
    
//     useEffect(()=>{
//         const getPlayer = async()=>{
//         const URL =`https://soccer.sportmonks.com/api/v2.0/countries/2/players?api_token=${process.env.REACT_APP_API_TOKEN}&per_page=20`
//         const response = await fetch(URL)
//         const data = await response.json()
//         setPlayers(data.data)
//         console.log(data)
//         //   console.log(data.data)
//       }
//       getPlayer()
      
//   },[]) 
        return (
            <>    
            <Header/>
                <header>
                    <h1 className="soccer"> Soccer Player App</h1>             
                </header>
                    <SearchController />
                <div className="foot">
                    <Footer />
                </div>
            </>  
        )
        
}

export default PlayersSearch