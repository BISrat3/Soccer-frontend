import React from 'react'
import './App.css'
import {  Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Main from './pages/Main';
import Player from './pages/Player';
import Footer from './components/Footer'
import Search from './components/Search'
import Results from './components/Results'
import SearchController from './components/SearchController'

function App() {
  const [players, setPlayer] = useState(null)
  
  return (
    <>
      <header>
        <h1 className="soccer"> Soccer Player App
      <Header />
        </h1>
      </header>
      {/* <Search /> */}
      <SearchController />
      {/* <Main />   */}
  
      <Routes>
          <Route path="/" element={<Main players={players} />} />
          <Route path="/players/:id" element={<Player players={players}/>}/>
          <Route path="/players/search/" element={<SearchController />}/>
      </Routes>
  
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default App;
