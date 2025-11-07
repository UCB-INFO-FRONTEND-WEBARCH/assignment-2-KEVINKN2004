import { useState } from 'react'

function TaskItem({ task, onToggle, onDelete}) {
    return (
        <li className = "task-item">
            <input
                type = "checkbox"
                className = "circle-buttons"
                checked = {task.completed}
                onChange = {() => onToggle(task.id)}
            />
        <span className = {task.completed ? "completed" : ''}>
            {task.text}
        </span>
            <button onClick = {() => onDelete(task.id)}> Delete </button>
        </li>
    )
}

export { TaskItem }