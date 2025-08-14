import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Form from "./pages/Form"

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/add" element={<Form tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit" element={<Form tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App