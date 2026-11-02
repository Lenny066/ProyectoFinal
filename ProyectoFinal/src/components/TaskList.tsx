import { useTasks } from '../context/TaskContext'
import type { Filter } from '../types'
import TaskItem from './TaskItem'

interface TaskListProps {
  filter: Filter
}

function TaskList({ filter }: TaskListProps) {
  const { tasks } = useTasks()

  // Quedarse solo con las tareas del filtro elegido
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'pending') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  if (visibleTasks.length === 0) {
    return (
      <div className="mt-16 flex flex-col items-center text-center text-gray-400 dark:text-gray-500">
        <span className="text-5xl">📝</span>
        <p className="mt-4 font-semibold">Sin tareas</p>
        <p className="mt-1 text-sm">Agregá una para empezar tu día.</p>
      </div>
    )
  }

  return (
    <ul className="mt-6 flex flex-col gap-2">
      {visibleTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
