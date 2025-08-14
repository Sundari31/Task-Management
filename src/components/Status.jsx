import React from 'react'

const Status = ({ status }) => {
    const map = {
    Pending: "bg-gray-200 text-gray-800",
    "In Progress": "bg-blue-200 text-blue-800",
    Completed: "bg-green-200 text-green-800",
  }
  return (
   <>
   <span className={`px-3 py-1 rounded-full text-sm font-medium ${map[status] ?? "bg-slate-200"}`}>
      {status}
    </span>
   </>
  )
}

export default Status
