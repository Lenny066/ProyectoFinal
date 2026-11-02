import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// Lo que comparte el contexto del tema
interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Atajo para usar el tema desde cualquier componente
export function useTheme() {
  return useContext(ThemeContext)
}
