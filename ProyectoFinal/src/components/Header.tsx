import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'

function Header() {
  const { name, isDark, toggleTheme, logout } = useUser()
  const [quote, setQuote] = useState('')

  // Al abrir la app: pedirle una frase al azar a la API
  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((response) => response.json())
      .then((data: { quote: string; author: string }) => {
        setQuote(`"${data.quote}" — ${data.author}`)
      })
  }, [])

  return (
    <header className="pt-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tarlist</h1>
          {name && (
            <p className="text-base text-gray-600 dark:text-gray-300">
              Hola, {name} 👋
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-xl dark:bg-gray-800"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {name && (
            <button
              onClick={logout}
              className="flex h-11 items-center justify-center rounded-full bg-gray-100 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-red-950/40 dark:hover:text-red-400"
            >
              Salir
            </button>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-500 italic dark:text-gray-400">
        {quote}
      </p>
    </header>
  )
}

export default Header