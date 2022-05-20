import React from 'react'
import './App.css'
import {  Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import About from './pages/About';
import Main from './pages/Main';
import Player from './pages/Player';
import PlayersSearch from './pages/PlayersSearch'

function App() {
  const [players, setPlayer] = useState(null)
  
  return (
    <>
      <Routes>
          <Route path="/about" element={<About players={players} />} />
          <Route path="/" element={<Main players={players} />} />
          <Route path="/players/:id" element={<Player players={players}/>}/>
          <Route path="/players/search/" element={<PlayersSearch players={players} />}/>
      </Routes>
    </>
  );
}

export default App;
