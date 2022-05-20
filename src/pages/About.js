import React from "react"
import Header from "../components/Nav"
import Footer from "../components/Footer"

function About(props){
    return (
        <>
        <Header/>
            <header>
                <h1 className="soccer"> Soccer Player App</h1>             
            </header>
            <div className="about">
                <h2>Instructions</h2>
                    <p>- To see the profile of the soccer player listed on the home page, please click the player's picture.</p>
                    <p>- To search for a specific player, please click the players link at the top of the page.</p>
                    <p>- Please enter the correct player's name in the search bar to see their profile.</p>
                    <p>- Please click the buttons at the bottom of the page to contact us.</p>
            </div>
            <div className ="foot">
                <Footer />
            </div>
        </>
    )
}

export default About