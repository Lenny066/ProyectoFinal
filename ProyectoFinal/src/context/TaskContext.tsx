import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Task } from '../types'

// Lo que comparte el contexto de tareas
interface TaskContextType {
  tasks: Task[]
  addTask: (text: string) => void
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loaded, setLoaded] = useState(false)

  // Al abrir la app: leer las tareas guardadas
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      setTasks(JSON.parse(saved))
    }
    setLoaded(true)
  }, [])

  // Cada vez que cambian las tareas: guardarlas
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, loaded])

  function addTask(text: string) {
    const newTask: Task = { id: Date.now(), text: text, completed: false }
    setTasks([...tasks, newTask])
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

// Atajo para usar las tareas desde cualquier componente
export function useTasks() {
  return useContext(TaskContext)
}
