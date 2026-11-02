import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const { isDark, toggleTheme } = useTheme()
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
        <h1 className="text-3xl font-bold tracking-tight">Tarlist</h1>
        <button
          onClick={toggleTheme}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-xl dark:bg-gray-800"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500 italic dark:text-gray-400">
        {quote}
      </p>
    </header>
  )
}

export default Header
