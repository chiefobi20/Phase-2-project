import Workout from "./Workout"

function WorkoutsList({workouts}){

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