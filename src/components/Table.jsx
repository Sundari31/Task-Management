import React from 'react'
import Status from "./Status";
import { useNavigate } from "react-router-dom";

const Table = ({ tasks, onDelete }) => {

      const navigate = useNavigate();

  if (tasks.length === 0) {
    return <p className="text-slate-500">No tasks yet. Click “Add Task”.</p>;
  }
  return (
    <>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={t.id} className="border-t border-slate-200 hover:bg-slate-50">
              <td className="px-4 py-3 font-medium">{t.title}</td>
              <td className="px-4 py-3">{t.description}</td>
              <td className="px-4 py-3"><Status status={t.status} /></td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => navigate("/edit", { state: { index } })}
                    className="px-3 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="px-3 py-1 rounded-md bg-rose-500 text-white hover:bg-rose-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table
