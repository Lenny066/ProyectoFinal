import { useState } from 'react'
import type { FormEvent } from 'react'
import { useUser } from '../context/UserContext'

// Pop up que pregunta el nombre y el tema la primera vez
function WelcomeModal() {
  const { saveUser } = useUser()
  const [name, setName] = useState('')
  const [isDark, setIsDark] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (name.trim() === '') return
    saveUser(name.trim(), isDark)
  }

  // Estilo del botón de tema según si está elegido o no
  function themeButtonClass(selected: boolean) {
    return selected
      ? 'flex-1 rounded-xl border-2 border-blue-500 bg-blue-50 py-3 font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300'
      : 'flex-1 rounded-xl border-2 border-gray-200 py-3 font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300'
  }

  return (
    // Envuelto en "dark" para que el pop up muestre el tema elegido en vivo
    <div className={isDark ? 'dark' : ''}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl bg-white p-6 text-gray-900 shadow-xl dark:bg-gray-800 dark:text-gray-100"
        >
          <h2 className="text-2xl font-bold">¡Bienvenido! 👋</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Contanos un poco de vos antes de empezar.
          </p>

          <label className="mt-5 block text-sm font-medium">¿Cómo te llamás?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            autoFocus
            className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900"
          />

          <p className="mt-5 text-sm font-medium">¿Qué tema querés usar?</p>
          <div className="mt-2 flex gap-3">
            <button
              type="button"
              onClick={() => setIsDark(false)}
              className={themeButtonClass(!isDark)}
            >
              ☀️ Claro
            </button>
            <button
              type="button"
              onClick={() => setIsDark(true)}
              className={themeButtonClass(isDark)}
            >
              🌙 Oscuro
            </button>
          </div>

          <button
            type="submit"
            disabled={name.trim() === ''}
            className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white disabled:opacity-40"
          >
            Empezar
          </button>
        </form>
      </div>
    </div>
  )
}

export default WelcomeModal
