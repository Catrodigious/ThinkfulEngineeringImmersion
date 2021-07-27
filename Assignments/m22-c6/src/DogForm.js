import React, {useState} from "react";

/*
Write a component DogForm in DogForm.js. It should have a form with three input fields: name, breed, age, in that order. The input fields should all take strings. There should be a submission button. After submission, log the values to the console and clear the input fields.
 */

function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (evt) => setName(evt.target.value);
    const handleBreedChange = (evt) => setBreed(evt.target.value);
    const handleAgeChange = (evt) => setAge(evt.target.value);

    const submitClicked = (evt) => {
        evt.preventDefault();
        console.log(name, breed, age);
        setName("");
        setBreed("");
        setAge("");
    }
 
    return (
        <form onSubmit={submitClicked}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} placeholder="Rufus" onChange={handleNameChange}></input>
            </div>
            <div>
                <label htmlFor="breed">Breed</label>
                <input type="text" id="breed" name="breed" value={breed} placeholder="pit bull" onChange={handleBreedChange}></input>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" id="age" name="age" value={age} placeholder="5" onChange={handleAgeChange}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default DogForm;
