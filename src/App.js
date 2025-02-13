import logo from './logo.svg';
import './App.css';
import About from "./components/About"
import WorkoutPlanner from './components/WorkoutPlanner';
import Exercise from './components/Exercise';
import WorkoutDropzone from './components/WorkoutDropzone';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const modeText = isDarkMode ? "Dark" : "Light"
  const darkModeClass = isDarkMode ? "dark-mode" : "App"

  function toggleDarkMode(){
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    console.log("It's time to exercise!")
  },
  []
)

  return (
    <div className= {darkModeClass}>
      <About num1 = {15} num2 = {5}/>
      <button onClick={toggleDarkMode}>{modeText} Mode</button>
    </div>
  );
}

export default App;
