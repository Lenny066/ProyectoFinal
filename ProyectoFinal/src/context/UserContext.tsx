import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// Lo que comparte el contexto del usuario (nombre + tema)
interface UserContextType {
  name: string
  isDark: boolean
  saveUser: (name: string, isDark: boolean) => void
  toggleTheme: () => void
  logout: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)

// Leer lo guardado en localStorage (si no hay nada, valores por defecto)
function loadUser() {
  const saved = localStorage.getItem('user')
  if (saved) {
    return JSON.parse(saved) as { name: string; isDark: boolean }
  }
  return { name: '', isDark: false }
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState(() => loadUser().name)
  const [isDark, setIsDark] = useState(() => loadUser().isDark)

  // Cada vez que cambia el nombre o el tema: guardarlos
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({ name, isDark }))
  }, [name, isDark])

  // Guarda lo que el usuario eligió en el pop up
  function saveUser(newName: string, newIsDark: boolean) {
    setName(newName)
    setIsDark(newIsDark)
  }

  function toggleTheme() {
    setIsDark(!isDark)
  }

  // Vuelve los datos a cero para que reaparezca el pop up
  function logout() {
    setName('')
    setIsDark(false)
  }

  return (
    <UserContext.Provider value={{ name, isDark, saveUser, toggleTheme, logout }}>
      {children}
    </UserContext.Provider>
  )
}

// Atajo para usar los datos del usuario desde cualquier componente
export function useUser() {
  return useContext(UserContext)
}