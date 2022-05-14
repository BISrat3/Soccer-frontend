import './App.css'
import Header from './components/Header'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="soccer"> Soccer Player App
            </h1>
      </header>
      <Header />
      <Main />
    </div>
  );
}

export default App;
