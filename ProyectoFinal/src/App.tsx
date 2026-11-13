import { useState } from 'react'
import Header from './components/Header'
import TaskFilters from './components/TaskFilters'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import WelcomeModal from './components/WelcomeModal'
import { TaskProvider } from './context/TaskContext'
import { UserProvider, useUser } from './context/UserContext'
import type { Filter } from './types'

// Pantalla de la app (usa el tema para poner o sacar la clase "dark")
function Screen() {
  const { name, isDark } = useUser()
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white px-5 pb-8 text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <TaskInput />
        <TaskFilters filter={filter} setFilter={setFilter} />
        <TaskList filter={filter} />
      </div>

      {/* Si todavía no sabemos el nombre, mostrar el pop up */}
      {name === '' && <WelcomeModal />}
    </div>
  )
}

function App() {
  return (
    <UserProvider>
      <TaskProvider>
        <Screen />
      </TaskProvider>
    </UserProvider>
  )
}

export default App
