// Molde de una tarea
export interface Task {
  id: number
  text: string
  completed: boolean
}

// Filtros válidos para la lista
export type Filter = 'all' | 'pending' | 'completed'
