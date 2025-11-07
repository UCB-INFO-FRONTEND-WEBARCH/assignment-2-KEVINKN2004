import { useState } from "react";

function TaskCounter({ tasks, completed }) {
    return (
        <section className = "task-counter">
            <img src = "/assets/check_icon.png" alt = "Check Icon" />
            <h3> {completed} / {tasks} </h3>
        </section>
    )
}

export { TaskCounter}