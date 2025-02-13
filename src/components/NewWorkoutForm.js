import { useState } from "react"
import { json, useOutletContext } from "react-router-dom"

function NewWorkoutForm(){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        duration: "",
        description: ""
    })

    const {addWorkout} = useOutletContext()

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:4000/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if(response.ok){
                response.json().then((newWorkoutData) => {
                    addWorkout(newWorkoutData)
                })
            }
        })
        // addWorkout(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={updateFormData} type="text" name="name" placeholder="New Name" value={formData.name}/>
            <input onChange={updateFormData} type="text" name="image" placeholder="New Image" value={formData.image}/>
            <input onChange={updateFormData} type="text" name="duration" placeholder="New Duration" value={formData.duration}/>
            <input onChange={updateFormData} type="text" name="description" placeholder="New Description" value={formData.description}/>
            <input type="submit" value="Add Workout"/>
        </form>
    )
}

export default NewWorkoutForm