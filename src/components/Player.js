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
    const URL=`https://soccer.sportmonks.com/api/v2.0/players/${playerId}?api_token=8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ`
    
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
        <section>  
            <div className ="home username">
                <img src={players.image_path} alt={players.common_name} className="player-name"/>
            </div>
               <aside>
               <p>First Name : {players.firstname}</p>
               <p>Full name : {players.fullname}</p>
               <p>Name : {players.common_name}</p>
               <p>Birth Country : {players.birthcountry}</p>
               <p>Birth Date : {players.birthdate}</p>
               <p>Display Name : {players.display_name}</p>
               <p>Height : {players.height}</p>
               <p>Nationality : {players.nationality}</p>
               <p>Weight : {players.weight}</p>
               </aside>
           
        </section>
    )
       
}

export default Player