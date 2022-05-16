import React from "react";
// import {  Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import Player from './Player'
// import Search from './Search'
// import { Link } from 'react-router-dom'
// // import {response} from 'react'
// import axios from 'axios'

function Main (props){
    console.log(props.players)
    // const [player, setPlayer] = useState(null)
    // const URL ="https://soccer.sportmonks.com/api/v2.0/players/172104?api_token=8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ"
    const [players, setPlayers] = useState(null)
    // const URL ="https://soccer.sportmonks.com/api/v2.0/players/?api_token=8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ"
    // const URL="https://ghibliapi.herokuapp.com/films"
    // const URL="https://soccer.sportmonks.com/api/v2.0/players/172104?apikey=6e4fc2a0-d262-11ec-a070-4d8b7854f793&country_id=48&max_age=30"
    const URL="https://app.sportdataapi.com/api/v1/soccer/players?apikey=6e4fc2a0-d262-11ec-a070-4d8b7854f793"
    
    useEffect(()=>{
      const getPlayer = async()=>{
          const response = await fetch(URL)
          const data = await response.json()
          setPlayers(data.data)
          console.log(data)
          console.log(data.data)
      }
      getPlayer()
  },[])
   
 const loaded =() =>{
    return (
        <div >
            <h2>{players.common_name}</h2>
            <h2>Hello</h2>
        <img src={players.image_path} alt={players.common_name}/>
                <br />
                {/* <h2>{players.first_name}</h2>
            <h2>Hello</h2>
            <img src={players.img} alt={players.first_name}/>  */}
        </div>
    )
                // console.log(players.common_name)
 }
        return players ? loaded() : <h1> can't find the player</h1>
    //    return <h1> can't find the player</h1>
}

export default Main