import LikeButton from "./LikeButton"

function Workout({workout}){

    console.log(workout)
    return(
        <div className="container">
            <div className="workout">
                <img className="workout-image" src={workout.image} alt={workout.name}/>
                <div className="workout-details">
                    <h2>{workout.name}</h2>
                    <p id="duration">{workout.duration}</p>
                    <p id="description">{workout.description}</p>

                    <div className="my-buttons">
                        {/* <button className="delete-button" onClick={deleteWorkout}>🗑️ Delete Workout</button> */}
                        <LikeButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout