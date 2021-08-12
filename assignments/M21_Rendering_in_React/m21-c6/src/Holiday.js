import React from "react";

// has name, day, month
function Holiday(props) {
    return <p>{props.name}: {props.month} {props.day}</p>
}

export default Holiday;