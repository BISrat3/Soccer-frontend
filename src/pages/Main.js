import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import SearchController from "../components/SearchController";
import Header from "../components/Nav";
import Footer from '../components/Footer';

function Main (props){
    const [players, setPlayers] = useState(null)
    
    useEffect(()=>{
        const getPlayer = async()=>{
        const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/countries/17/players?api_token=${process.env.REACT_APP_API_TOKEN}&per_page=20`)
        const data = await response.json()
        setPlayers(data.data)
        console.log(data)
      }
      getPlayer()
      
  },[]) 

const loaded =() =>{
    return (
        <>  
            <div>
                <Header />
                <header>
                <h1 className="soccer"> Soccer Player App</h1>             
                </header>
            </div>
            <SearchController/>
            <div className ="container">
                {players.map((play, idx) =>{
                    return <div className="column"  >
                        <Link to ={`/players/${play.player_id}`} className='Link' >
                            <h3 className ="index" key={idx} > {play.fullname} 
                            <img src={play.image_path} alt={play.common_name} className="image-player"/></h3>
                        </Link>
                    </div>
            })}   
            </div>
             <div>
                <Footer />
             </div>
       </>  
    )
 }
    return players ? loaded() : <h1> The Page is loading</h1>
}

export default Main