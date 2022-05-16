import React from 'react'
import './App.css'
import {  Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main';
import Player from './components/Player';
import Footer from './components/Footer'

function App() {
  const [players, setPlayer] = useState(null)
    // const getPlayer = () =>{
    //   const 
    //     fetch('https://soccer.sportmonks.com/api/v2.0/players/172104?api_token=8J5v8UPD2G3nCu6yZUOYNCkxMX8SzUJ9GRFCGXhcIEufeQoBkyhkPKapzuzJ')
    //     .then((response) => response.json())
    //     .then((response) => setPlayer(response.results))
    //     // console.log(response)
    // }
    // useEffect(()=>{
    //     getPlayer()
    // },[])
    
  return (
    <div >
      <header>
        <h1 className="soccer"> Soccer Player App
        </h1>
      </header>
      <Header />
      {/* <Main />   */}
      <div>
      <Routes>
          <Route path="/:id" element={<Player players={players}/>}/>
          <Route path="/" element={<Main players={players} />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
