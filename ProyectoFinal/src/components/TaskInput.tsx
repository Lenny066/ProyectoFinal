import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskInput() {
  const { addTask } = useTasks()
  const [text, setText] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (text.trim() === '') return
    addTask(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué tenés que hacer?"
        className="min-w-0 flex-1 rounded-xl bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
      />
      <button
        type="submit"
        className="rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white active:bg-indigo-600"
      >
        + Agregar
      </button>
    </form>
  )
}

export default TaskInput
