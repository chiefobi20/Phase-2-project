function Workout({workout}){

    console.log(workout)
    return(
        <div className="container">
            <li>
                <img src={workout.image}/>
            </li>
        </div>
    )
}

export default Workout