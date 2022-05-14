import React from "react";
import { Route, Routes} from 'react-router-dom'
import Player from '../pages/Player'
import Show from '../pages/Show'

function Main (props){
    console.log(props)
    return (
        <main>
            <Routes>
                <Route path="/" element={<Player/>}/>
                <Route path="/player/:id" render={(rp) =>(
                    <Show {...rp}/>
                )}/>
            </Routes>
        </main>
    )
}

export default Main