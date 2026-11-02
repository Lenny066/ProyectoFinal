import type { Filter } from '../types'

interface TaskFiltersProps {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const options: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
]

function TaskFilters({ filter, setFilter }: TaskFiltersProps) {
  return (
    <nav className="mt-6 flex gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setFilter(option.value)}
          className={
            filter === option.value
              ? 'flex-1 rounded-lg bg-white py-2 text-sm font-semibold shadow-sm dark:bg-gray-700'
              : 'flex-1 rounded-lg py-2 text-sm text-gray-500 dark:text-gray-400'
          }
        >
          {option.label}
        </button>
      ))}
    </nav>
  )
}

export default TaskFilters
