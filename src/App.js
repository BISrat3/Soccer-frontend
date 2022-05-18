import React from 'react'
import './App.css'
import {  Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Main from './pages/Main';
import Player from './pages/Player';
import PlayersSearch from './pages/PlayersSearch'
import Footer from './components/Footer'
import Search from './components/Search'

function App() {
  const [players, setPlayer] = useState(null)
  
  return (
    <>
      {/* <Header />
      <header>
        <h1 className="soccer"> Soccer Player App
        </h1>
      </header> */}
      {/* <Search /> */}
      <Routes>
          <Route path="/" element={<Main players={players} />} />
          <Route path="/players/:id" element={<Player players={players}/>}/>
          <Route path="/players/search/" element={<PlayersSearch players={players} />}/>
      </Routes>
      {/* <SearchController /> */}
        {/* <PlayersSearch/>   */}
      {/* <playerSearch/> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
