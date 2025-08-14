import React from 'react'
import { useNavigate } from "react-router-dom"
import Table from "../components/Table"

const Home = ({ tasks, setTasks }) => {
  const navigate = useNavigate()

  const handleDelete = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between bg-slate-200 px-4 py-3">
          <h1 className="text-2xl font-bold">Task List</h1>
          <button
            onClick={() => navigate("/add")}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            + Add Task
          </button>
        </div>

        <Table tasks={tasks} onDelete={handleDelete} />
      </div>
    </>
  )
}

export default Home
