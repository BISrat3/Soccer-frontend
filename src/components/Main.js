import React from "react";
import { Route, Routes} from 'react-router-dom'
import Player from '../pages/Player'
import Show from '../pages/Show'

function Main (props){
    return (
        <main>
            <Routes>
                <Route path="/" />
                <Route path="/player/:id" />
            </Routes>
        </main>
    )
}

export default Main