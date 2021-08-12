import React from "react";

function Clock() {
    const currentTime = new Date().getHours();
    if (currentTime < 12) return <p>Good Morning!</p>
    else if (currentTime > 12 && currentTime < 18) return <p>Good Afternoon!</p>
    else return <p>Good Evening!</p>
}

export default Clock;
