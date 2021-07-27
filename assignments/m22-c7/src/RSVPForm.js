import React, { Profiler, useState } from "react";

/*
Build the RSVPForm component in RSVPForm.jsx to be a form with these fields in this order:

    "Name" input field.
    Dropdown with the following age ranges: Prefer not to say, 0-19, 20-39, 40-59, 60+
    "New Member" checkbox, set to unchecked by default.
    "Comment" input field.
    Submit button.

Upon submission, log each value together, in a single statement, to the console and clear the fields in the form.
*/

function RSVPForm() {
    const objectInitialization = {
        name: "",
        age: "Prefer not to say",
        newMember: false,
        comment: ""
    };

    const initializeEmptyObject = {
        name: "",
        age: "",
        newMember: false,
        comment: ""
    };

    const [rsvpForm, setRsvpForm] = useState(objectInitialization);
    const handleRsvpForm = (evt) =>{

        if (evt.target.type === "checkbox"){
            setRsvpForm({
                ...rsvpForm, 
                [evt.target.name]: evt.target.checked
            });
        }else{
            setRsvpForm({
                ...rsvpForm, 
                [evt.target.name]: evt.target.value
            });
        }
    }
    const submitHandler = (evt) => {
        evt.preventDefault();
        const {name, age, newMember, comment} = rsvpForm;
        console.log(name, age, newMember, comment);
        setRsvpForm(initializeEmptyObject);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={rsvpForm.name} placeholder="Jamie Smith" onChange={handleRsvpForm} />
            </div>
            <div>
                <select name="age" id="age" value={rsvpForm.age} onChange={handleRsvpForm}>
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="0-19">0-19</option>
                    <option value="20-39">20-39</option>
                    <option value="40-59">40-59</option>
                    <option value="60+">60+</option>
                </select>
            </div>
            <div>
                <input type="checkbox" checked={rsvpForm.newMember} id="newMember" name="newMember" onChange={handleRsvpForm} />
                <label>New Member</label>
            </div>
            <div>
                <fieldset>
                    <legend>Comments</legend>
                    <textarea id="comment" name="comment" onChange={handleRsvpForm} />
                </fieldset>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    )
}

export default RSVPForm;
