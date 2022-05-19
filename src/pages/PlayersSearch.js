import React from "react"
import SearchController from "../components/SearchController"
import Header from "../components/Nav"
import Footer from "../components/Footer"

function PlayersSearch(props){

    return (
        <>    
            <Header/>
            <header>
                <h1 className="soccer"> Soccer Player App</h1>             
            </header>
                <SearchController />
            <div className ="container insert">
                <h3 className="hidden">Please Search your player to see the profile</h3>
            </div>
            <div className ="foot">
                <Footer />
            </div>
        </>  
    )
}

export default PlayersSearch