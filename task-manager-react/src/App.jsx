import { useState } from 'react'
import { TaskForm } from "./components/TaskForm.jsx"
import { TaskList } from "./components/TaskList.jsx"
import { TaskCounter } from "./components/TaskCounter.jsx"

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all")
  
  const addTask = (text) => {
    const newTask = { id: crypto.randomUUID(), text, completed: false}
    setTasks([...tasks, newTask])
  };
  
  const toggleTask = (id) => {
    // Toggle task completion
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed } : task))
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  const filteredTasks = tasks.filter(task => {
  if (filter === 'active') return !task.completed;
  if (filter === 'completed') return task.completed;
  return true; // 'all'
});
  
  return (
    <section className = "body-column-1">
      {/* Header */}
      <header className = "main-header" aria-label = "Header">
        <img src = "assets/menu_icon.png" alt = "Menu Icon" />

        <form className = "search-box" 
              role = "search" 
              aria-label = "Quick Find"
              onSubmit = {(e) => e.preventDefault()}>
          <label htmlFor = "quick-find" className = "search-box-container">
            <img src = "/assets/search_icon.png" alt = "Search Icon" aria-hidden = "true" />
            <input type = "search" id = "quick-find" placeholder = "Quick find" />
          </label>
        </form>

      <TaskCounter tasks = {tasks.length} completed = {filteredTasks.length} />

      </header>

      <section className = "body-column-2">
        <nav className = "left-nav" aria-label = "Sidebar">
          <ul className = "nav-list">
            <li>
              <a className = "left-nav-item" aria-label = "Inbox">
                <img src = "/assets/inbox_icon.png" alt = "Inbox Icon" />
                <h3> Inbox </h3>
                <span className = "nav-item-count">
                  <h3> {tasks.length} </h3>
                </span>
              </a>
            </li>
            <li>
              <a className = "left-nav-item" aria-label = "Today">
                <img src = "/assets/calendar_icon.png" alt = "Calendar Icon" />
                <h3> Today </h3> 
                <span className = "nav-item-count">
                  <h3> {tasks.length} </h3>
                </span>
              </a>
            </li>
            <li>
              <a className = "left-nav-item" aria-label = "Upcoming">
                <img src = "/assets/upcoming_icon.png" alt = "Upcoming Icon" />
                <h3> Upcoming </h3>
                <span className = "nav-item-count">
                  <h3> {tasks.length} </h3>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <main className = "main-content" aria-label = "Main">
          <h1> Inbox </h1>

          <TaskForm onAddTask = {addTask} />

      <div className = "filter-buttons">
        <button
          className = {filter === "all" ? "active" : ""}
          onClick = {() => setFilter("all")}> All </button>
        <button
          className = {filter === "active" ? "active" : ""}
          onClick = {() => setFilter("active")}> Active </button>
        <button
          className = {filter === "completed" ? "active" : ""}
          onClick = {() => setFilter("completed")}> Completed </button>
      </div>

      <TaskList 
        tasks = {filteredTasks} 
        onToggle ={toggleTask}
        onDelete={deleteTask}
      />
        </main>
      </section>
    </section>
  )
}

export default App