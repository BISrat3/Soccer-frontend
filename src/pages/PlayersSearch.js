import React from "react"
import {useState, useEffect} from 'react'
import SearchController from "../components/SearchController"
import Search from "../components/Search"
import Results from "../components/Results"
import {Link} from 'react-router-dom'

function PlayersSearch(props){

        return (
            <>    
                <SearchController />
                {/* <Results /> */}
            </>  
        )
        
}

export default PlayersSearch