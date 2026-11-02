import { useState } from 'react'
import Header from './components/Header'
import TaskFilters from './components/TaskFilters'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { TaskProvider } from './context/TaskContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import type { Filter } from './types'

// Pantalla de la app (usa el tema para poner o sacar la clase "dark")
function Screen() {
  const { isDark } = useTheme()
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white px-5 pb-8 text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <TaskInput />
        <TaskFilters filter={filter} setFilter={setFilter} />
        <TaskList filter={filter} />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Screen />
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
