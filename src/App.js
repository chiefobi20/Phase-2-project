import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import About from "./components/About"
import WorkoutPlanner from './components/WorkoutPlanner';
import Exercise from './components/Exercise';
import WorkoutDropzone from './components/WorkoutDropzone';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const modeText = isDarkMode ? "Dark" : "Light"
  const darkModeClass = isDarkMode ? "dark-mode" : "App"

  function toggleDarkMode(){
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className= {darkModeClass}>
      <About num1 = {15} num2 = {5}/>
      <button onClick={toggleDarkMode}>{modeText} Mode</button>
>>>>>>> 8366ca9 (Phase 2read me update)
    </div>
  );
}

export default App;
