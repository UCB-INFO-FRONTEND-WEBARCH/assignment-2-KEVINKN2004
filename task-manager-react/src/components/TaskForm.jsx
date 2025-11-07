import { useState } from 'react'

function TaskForm({ onAddTask }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const trimmed = text.trim()
        if (!trimmed) return

        onAddTask(trimmed)
        setText('')
    }

    return (
        <form className = "task-form" onSubmit = {handleSubmit}>
            <input 
            value = {text} 
            onChange = {(e) => setText(e.target.value)} 
            placeholder = "Add Task" 
            aria-label = "Add Task" 
            />
            <button type = "Submit">Add</button>
        </form>
    )
}

export { TaskForm }