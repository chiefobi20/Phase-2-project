import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import WorkoutsList from './components/WorkoutsList';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

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
      <NavBar/>
      <Header/>
      <Outlet context={
        {
          workouts: workouts
        }
      }/>
    </div>
  );
}

export default App;
