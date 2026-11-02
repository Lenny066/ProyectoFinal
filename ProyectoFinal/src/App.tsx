import { TaskProvider, useTasks } from './context/TaskContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'

// Marco del teléfono (usa el tema para poner o sacar la clase "dark")
function Phone() {
  const { isDark, toggleTheme } = useTheme()
  const { tasks, addTask } = useTasks()

  return (
    <div className="flex min-h-screen justify-center sm:items-center sm:py-8">
      <div className={isDark ? 'dark' : ''}>
        <div className="flex min-h-screen w-screen flex-col bg-white p-6 text-gray-900 transition-colors sm:min-h-0 sm:h-[780px] sm:w-[380px] sm:rounded-[40px] sm:border-8 sm:border-gray-900 sm:shadow-2xl dark:bg-gray-900 dark:text-gray-100">
          {/* PRUEBA TEMPORAL: se reemplaza por los componentes en la Parte 3 */}
          <h1 className="text-2xl font-bold">Tarlist</h1>
          <p className="mt-4">Tareas guardadas: {tasks.length}</p>
          <button
            onClick={toggleTheme}
            className="mt-4 rounded-xl bg-gray-200 p-3 dark:bg-gray-700"
          >
            Cambiar tema
          </button>
          <button
            onClick={() => addTask('Tarea de prueba')}
            className="mt-2 rounded-xl bg-indigo-500 p-3 text-white"
          >
            Agregar tarea de prueba
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Phone />
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
