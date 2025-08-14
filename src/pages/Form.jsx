import React, { useEffect, useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Form = ({ tasks, setTasks }) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const editIndex = state?.index

  const idCounter = useRef(tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1)

  const [form, setForm] = useState({
    id: undefined,
    title: "",
    description: "",
    duedate: "",
    status: "Pending",
  })

  useEffect(() => {
    if (editIndex !== undefined && tasks[editIndex]) {
      setForm(tasks[editIndex])
    }
  }, [editIndex, tasks])

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()

    if (editIndex !== undefined && tasks[editIndex]) {
  
      const next = [...tasks]
      next[editIndex] = form
      setTasks(next)
    } else {
      const newTask = { ...form, id: idCounter.current }
      idCounter.current += 1
      setTasks([...tasks, newTask])
    }

    navigate("/")
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        {editIndex !== undefined ? "Edit Task" : "Add New Task"}
      </h2>

      <form
        onSubmit={onSubmit}
        className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write documentation"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            required
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief details about the task"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            name="duedate"
            type="date"
            value={form.duedate} // Fixed from form.date
            onChange={onChange}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Task
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
