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
      </div>
      <Footer />
    </div>
  );
}

export default App;
