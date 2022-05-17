import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";


function Main (props){
    // console.log(props.players)
    // const [player, setPlayer] = useState(null)
    const [players, setPlayers] = useState(null)
    
    useEffect(()=>{
        const getPlayer = async()=>{
        const api_token='8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ'
          const URL =`https://soccer.sportmonks.com/api/v2.0/countries/17/players?api_token=${api_token}&per_page=20`
          const response = await fetch(URL)
          const data = await response.json()
          setPlayers(data.data)
          console.log(data)
        //   console.log(data.data)
      }
      getPlayer()
      
  },[]) 

//   const mapping = players.map((ele, id) => (
//       <div className="play" key={id}>
//         <p className ="home username">Name : - {ele.players.fullname}</p>
//         console.log(players.fullname)
//       </div>
//   ))
const loaded =() =>{
    return (
            <div className ="container">
                {players.map((play, idx) =>{
                    return <div className="column"  >
                        <Link to ={`/players/${play.player_id}`} >
                            <h3 className ="index" key={idx} >Name : {play.fullname} 
                        <img src={play.image_path} alt={play.common_name} /></h3>
                        </Link>
                        
                        </div>
           
            })}   
        </div>
       
        
    )
 }
    return players ? loaded() : <h1> We can't find a player</h1>
}

export default Main