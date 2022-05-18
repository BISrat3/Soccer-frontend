import React from "react"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Player (props){
    // console.log(props)
    let params = useParams()
    const playerId = params.id;
    // console.log(id)
    // let player= props.players[id]
    const [players, setPlayers] = useState('')
    const URL=`https://soccer.sportmonks.com/api/v2.0/players/${playerId}?api_token=${process.env.REACT_APP_API_TOKEN}`
    
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
  
    return(
        <>  
            <div className="player-container">
            <div className ="show column">
                <img src={players.image_path} alt={players.common_name} className="single-img player"/>
            </div>
            <div className="aside">
               <p><strong> First Name </strong> : {players.firstname}</p>
               <p><strong>Full name </strong> : {players.fullname}</p>
               <p><strong>Name </strong>  : {players.common_name}</p>
               <p><strong>Birth Country </strong>  : {players.birthcountry}</p>
               <p><strong>Birth Date  </strong> : {players.birthdate}</p>
               <p><strong>Display Name </strong>  : {players.display_name}</p>
               <p><strong>Height </strong> : {players.height}</p>
               <p><strong>Nationality </strong>  : {players.nationality}</p>
               <p><strong>Weight </strong>  : {players.weight}</p>
            </div>
            </div>
        </>
    )
       
}

export default Player