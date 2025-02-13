function Workout({workout}){

    console.log(workout)
    return(
        <li>
            <img src={workout.image}/>
        </li>
    )
}

export default Workout