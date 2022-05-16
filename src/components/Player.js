import React from "react"
// import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Player (props){
    // console.log(props)
    // let params = useParams()
    // const playerId = params.id;
    // // console.log(id)
    // // let player= props.players[id]
    // const [players, setPlayers] = useState('')
    // const URL=`https://soccer.sportmonks.com/api/v2.0/players/${playerId}?api_token=8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ`
    
    // useEffect(()=>{
    //     const getPlayer = async()=>{
    //         const response = await fetch(URL)
    //         const data = await response.json()
    //         setPlayers(data.data)
    //         console.log(data)
    //         console.log(data.data)
    //     }
    //     getPlayer()
        
    // },[]) 
  
    return(
        <section>  
            {/* <div className ="home username">
               <p>Name :{players.common_name}</p>
               <p>Name :{players.nationality}</p>
               <p>Name :{players.common_name}</p>
            </div> */}
           
        </section>
    )
       
}

export default Player