import Workout from "./Workout"
import { useOutletContext } from "react-router-dom"

function WorkoutsList(){

    const {workouts} = useOutletContext()

    const workoutComponents = workouts.map((workoutObj) => {
        return <Workout key={workoutObj.id} workout={workoutObj} name={workoutObj.name} description={workoutObj.description}/>
    })

    return(
        <ul>
            {workoutComponents}
        </ul>
    )
}


export default WorkoutsList