import Workout from "./Workout"
import { useOutletContext } from "react-router-dom"

function WorkoutsList({}){

    const {workouts} = useOutletContext()

    const workoutComponents = workouts.map((workoutObj) => {
        return <Workout key={workoutObj.id} workout={workoutObj}/>
    })

    return(
        <div>
            {workoutComponents}
        </div>
    )
}


export default WorkoutsList