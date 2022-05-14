import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <div className="App">
      <header className="App-header">
        <h1 className="soccer"> Soccer Player App
        </h1>
      </header>
      <Header />
      <Main />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
