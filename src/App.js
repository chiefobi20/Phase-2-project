import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import WorkoutsList from './components/WorkoutsList';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [workouts, setWorkouts] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/workouts")
    .then(response => response.json())
    .then(workoutsData => setWorkouts(workoutsData))
  },
  []
)

  return (
    <div className="App">
       <Header/>
      <WorkoutsList workouts={workouts}/>
    </div>
  );
}

export default App;
