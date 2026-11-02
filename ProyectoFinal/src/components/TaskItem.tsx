import { useTasks } from '../context/TaskContext'
import type { Task } from '../types'

interface TaskItemProps {
  task: Task
}

function TaskItem({ task }: TaskItemProps) {
  const { toggleTask, deleteTask } = useTasks()

  return (
    <li className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-800">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="h-5 w-5 accent-indigo-500"
      />
      <span
        className={
          task.completed
            ? 'flex-1 break-words text-gray-400 line-through dark:text-gray-500'
            : 'flex-1 break-words'
        }
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="px-2 text-xl text-gray-400 active:text-red-500"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
