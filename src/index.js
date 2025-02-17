import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NewWorkoutForm from './components/NewWorkoutForm';
import WorkoutsList from './components/WorkoutsList';
// import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <WorkoutsList/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/add-workout",
        element: <NewWorkoutForm/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router}/>


  // <React.Fragment>
  //   <h1>Welcome All!</h1>
  //   <h2>This is an Example</h2>
  // </React.Fragment>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
